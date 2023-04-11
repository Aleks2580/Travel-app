const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Amadeus = require("amadeus");

dotenv.config();

const app = express();
app.use(cors());

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

app.get("/autocomplete", async (req, res) => {
  const { term } = req.query;
  console.log(`Search term: ${term}`);

  try {
    const response = await amadeus.referenceData.locations.get({
      keyword: term,
      subType: Amadeus.location.any,
    });
    const locations = response.data.map((location) => ({
      label: `${location.name} (${location.iataCode})`,
      value: location.iataCode,
      key: location.name,
    }));
    console.log(`Locations: ${JSON.stringify(locations)}`);
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

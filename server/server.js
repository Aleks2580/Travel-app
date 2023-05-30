const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Amadeus = require("amadeus");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

let accessToken = null; //store the access token

// Middleware to obtain access token
const obtainAccessToken = async () => {
  try {
    const response = await amadeus.client
      .clientCredentials({
        grantType: "client_credentials",
      })
      .then((response) => response.data);

    accessToken = response.access_token;
    console.log("Access token obtained successfully!");
  } catch (error) {
    console.error("Failed to obtain access token:", error);
  }
};

// Initial token retrieval
obtainAccessToken();

// Schedule token renewal before it expires (validity: 30 minutes)
const renewToken = () => {
  setTimeout(obtainAccessToken, 29 * 60 * 1000);
};

renewToken();

//Autocomplete fields

app.get("/autocomplete", async (req, res) => {
  const { term } = req.query;
  //console.log(`Search term: ${term}`);

  try {
    const response = await amadeus.referenceData.locations.get({
      keyword: term,
      subType: Amadeus.location.any,
    });
    const locations = response.data.map((location) => ({
      label: `${location.name} (${location.iataCode})`,
      value: `${location.name} (${location.iataCode})`,
      key: location.id,
    }));
    //console.log("asfasf", locations[0]);
    //console.log(`Locations: ${JSON.stringify(locations)}`);
    res.json(locations);
  } catch (error) {
    //console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Search request
app.post("/search_flight", async (req, res) => {
  const { from, to, dates, travellersAndClass } = req.body;
  console.log(req.body);

  try {
    const flightOffersSearchParams = {
      originLocationCode: "SHA",
      destinationLocationCode: "BKK",
      departureDate: dates.depart,
      adults: travellersAndClass.adults,
      children: travellersAndClass.children,
      travelClass: travellersAndClass.class.toUpperCase(),
      currencyCode: "USD",
    };

    if (dates.return) {
      flightOffersSearchParams.returnDate = dates.return;
    }

    const response = await amadeus.shopping.flightOffersSearch.get(
      flightOffersSearchParams
    );
    console.log("REsPONSE_DATA:", response.data[0]);
    res.status(200).json({ data: response.data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

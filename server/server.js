const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Amadeus = require("amadeus");
const fetch = require("isomorphic-fetch");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let accessToken = null; //store the access token

// Middleware to obtain access token
const obtainAccessToken = async () => {
  try {
    const clientId = process.env.AMADEUS_CLIENT_ID;
    const clientSecret = process.env.AMADEUS_CLIENT_SECRET;
    const url = "https://test.api.amadeus.com/v1/security/oauth2/token/";
    const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: requestBody,
    });

    const data = await response.json();
    console.log("DATA TOKEN", data);
    accessToken = data.access_token;
    console.log("Access token obtained successfully!");
  } catch (error) {
    console.error("Failed to obtain access token:", error);
  }
};

obtainAccessToken();

const renewToken = () => {
  setTimeout(obtainAccessToken, 29 * 60 * 1000);
};

renewToken();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

//Autocomplete fields

app.get("/autocomplete", async (req, res) => {
  const { term } = req.query;
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
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Search request
app.post("/search_flight", async (req, res) => {
  const { from, to, dates, travellersAndClass } = req.body;
  console.log(req.body);

  try {
    const flightOffersSearchParams = {
      originLocationCode: "LAX",
      destinationLocationCode: "PVG",
      departureDate: dates.depart,
      adults: travellersAndClass.adults,
      children: travellersAndClass.children,
      travelClass: travellersAndClass.class.toUpperCase(),
      currencyCode: "USD",
      max: 10,
    };

    if (dates.return) {
      flightOffersSearchParams.returnDate = dates.return;
    }

    const response = await amadeus.shopping.flightOffersSearch.get(
      flightOffersSearchParams
      // { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log("REsPONSE_DATA:", response.data);
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import React from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";
import style from "./SearchResults.module.css";

export default function SearchResults() {
  const location = useLocation();
  const flights = location.state?.flightsData || [];
  return (
    <div className={style.main}>
      {flights.map((flight, index) => (
        <SearchCard key={index} flight={flight} />
      ))}
    </div>
  );
}

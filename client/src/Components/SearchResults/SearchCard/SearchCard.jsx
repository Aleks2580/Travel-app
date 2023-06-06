import React from "react";
import style from "./SearchCard.module.css";
import { Card, Tag, Button } from "antd";
import {
  DollarOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const SearchCard = ({ flight }) => {
  const { currency, total } = flight.price;
  //console.log("FLIGHT", flight);
  return (
    <div className={style.card}>
      <div className={style.ticket}>
        <div className={style.info}></div>
        <div className={style.total_select}>
          <span className={style.price}>135$</span>
          <Button className={style.button_select}>
            Select <ArrowRightOutlined />{" "}
          </Button>
        </div>
      </div>
      {/* <div className={style.cardHeader}>
        <div className={style.airlineLogo}>
          <img src={flight.airlineLogo} alt={flight.airlineName} />
        </div>
        <div className={style.price.total}>
          <span className={style.currency}>
            <DollarOutlined />
          </span>
          {`${currency} ${total}`}
        </div>
      </div>
      <div className={style.cardBody}>
        <div className={style.flightDetails}>
          <div className={style.time}>
            <span>{flight.itineraries[0].segments[0].departure.at}</span>
            <span>{flight.itineraries[0].segments[1]?.arrival.at}</span>
          </div>
          <div className={style.locations}>
            <span>{flight.itineraries[0].segments[0].departure.iataCode}</span>
            <span>{flight.itineraries[0].segments[1]?.arrival.iataCode}</span>
          </div>
        </div>
        <div className={style.flightInfo}>
          <div className={style.flightDuration}>
            <ClockCircleOutlined />
            <span>{flight.itineraries[0].duration}</span>
          </div>
          <div className={style.flightStops}>
            <Tag color="blue">
              {flight.itineraries[0].segments.length - 1 === 0
                ? "Direct"
                : flight.itineraries[0].segments.length - 1 === 1
                ? "1 Stop"
                : `${flight.itineraries[0].segments.length - 1} Stops`}
            </Tag>
          </div>
        </div>
      </div>
      <div className={style.cardFooter}>
        <Button type="primary">Select Flight</Button>
      </div> */}
    </div>
  );
};

export default SearchCard;

import React from "react";
import style from "./SearchCard.module.css";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const SearchCard = ({ flight }) => {
  const { currency, total } = flight.price;
  console.log("FLIGHT", flight);

  return (
    <div className={style.card}>
      <div className={style.ticket}>
        <div className={style.main_info}>
          <div className={style.info}>
            <div className={style.airlines}>
              {flight.itineraries[0].segments[0].carrierCode}
            </div>
            <div className={style.time_duration_flight}>
              <div className={style.time_airport}>
                <span className={style.time}>13:45</span>
                <span className={style.airport}>
                  {flight.itineraries[0].segments[0].departure.iataCode}
                </span>
              </div>
              <div className={style.duration_arrow_direct}>
                <span className={style.duration}>
                  {flight.itineraries[0].duration.slice(2)}
                </span>
                <div className={style.arrow_plane}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //xml:space="preserve"
                    viewBox="0 0 12 12"
                    className={style.plane}
                  >
                    <path
                      fill="#898294"
                      d="M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71"
                    ></path>
                  </svg>
                </div>

                {flight.itineraries[0].segments.length === 1 ? (
                  <span className={style.direct}>Direct</span>
                ) : (
                  `${flight.itineraries[0].segments.length - 1} stop ${
                    flight.itineraries[0].segments[1].departure.iataCode
                  } `
                )}
              </div>
              <div className={style.time_airport}>
                <span className={style.time}>13:45</span>
                <span className={style.airport}>LHR</span>
              </div>
            </div>
          </div>
          {/* <div className={style.info}>
      <div className={style.airlines}>AirChina</div>
      <div className={style.time_duration_flight}>
        <div className={style.time_airport}>
          <span className={style.time}>13:45</span>
          <span className={style.airport}>LHR</span>
        </div>
        <div className={style.duration_arrow_direct}>
          <span className={style.duration}>12h 40</span>
          <span className={style.arrow}>-------></span>
          <span className={style.direct}>Direct</span>
        </div>
        <div className={style.time_airport}>
          <span className={style.time}>13:45</span>
          <span className={style.airport}>LHR</span>
        </div>
      </div>
    </div> */}
        </div>
        <div className={style.total_select}>
          <span className={style.price}>{`${currency} ${Number(
            total
          ).toFixed()}`}</span>
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

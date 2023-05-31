import React from "react";
import style from "./SearchCard.module.css";
import { Card, Tag, Button } from "antd";
import { DollarOutlined, ClockCircleOutlined } from "@ant-design/icons";

// const SearchCard = ({ flight }) => {
//   console.log(flight);
//   const
//   const { currency, total, base, fees, grandTotal } = flight.price;
//   return (
//     <Card className={style.card}>
//       <div className={style.cardHeader}>
//         <div className={style.airlineLogo}>
//           <img src={flight.airlineLogo} alt={flight.airlineName} />
//         </div>
//         <div className={style.price.total}>
//           <span className={style.currency}>
//             <DollarOutlined />
//           </span>
//           {total}
//         </div>
//       </div>
//       <div className={style.cardBody}>
//         <div className={style.flightDetails}>
//           <div className={style.time}>
//             {/* <span>{departureTime}</span> */}
//             <span>{flight.arrivalTime}</span>
//           </div>
//           <div className={style.locations}>
//             <span>{flight.origin}</span>
//             <span>{flight.destination}</span>
//           </div>
//         </div>
//         <div className={style.flightInfo}>
//           <div className={style.flightDuration}>
//             <ClockCircleOutlined />
//             <span>{flight.duration}</span>
//           </div>
//           <div className={style.flightStops}>
//             <Tag color="blue">{flight.stops} Stop</Tag>
//           </div>
//         </div>
//       </div>
//       <div className={style.cardFooter}>
//         <Button type="primary">Select Flight</Button>
//       </div>
//     </Card>
//   );
// };

// export default SearchCard;
const SearchCard = ({ flight }) => {
  const { currency, total } = flight.price;

  return (
    <Card className={style.card}>
      <div className={style.cardHeader}>
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
            <span>{flight.itineraries[0].segments[1].arrival.at}</span>
          </div>
          <div className={style.locations}>
            <span>{flight.itineraries[0].segments[0].departure.iataCode}</span>
            <span>{flight.itineraries[0].segments[1].arrival.iataCode}</span>
          </div>
        </div>
        <div className={style.flightInfo}>
          <div className={style.flightDuration}>
            <ClockCircleOutlined />
            <span>{flight.itineraries[0].duration}</span>
          </div>
          <div className={style.flightStops}>
            <Tag color="blue">
              {flight.itineraries[0].segments.length - 1} Stop
            </Tag>
          </div>
        </div>
      </div>
      <div className={style.cardFooter}>
        <Button type="primary">Select Flight</Button>
      </div>
    </Card>
  );
};

export default SearchCard;
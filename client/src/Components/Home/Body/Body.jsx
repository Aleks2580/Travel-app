import React from "react";
import { Card, Row, Col } from "antd";
import style from "./Body.module.css";

export default function Body() {
  return (
    <div className={style.body_block}>
      <div className={style.main_block}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card className={style.card}>
              <img src="/img/hotel.jpg" alt="Hotel" />
              <div className={style.card_title}>Hotels</div>
              <div className={style.card_description}>
                Find the perfect hotel for your next trip.
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card className={style.card}>
              <img src="/img/car-hire.jpg" alt="Car Hire" />
              <div className={style.card_title}>Car Hire</div>
              <div className={style.card_description}>
                Rent a car and explore the city at your own pace.
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card className={style.card}>
              <img src="/img//explore.jpg" alt="Explore" />
              <div className={style.card_title}>Explore Everywhere</div>
              <div className={style.card_description}>
                Discover new destinations.
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

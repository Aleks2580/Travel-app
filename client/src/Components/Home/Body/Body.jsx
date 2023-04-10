import React, { useState, useEffect } from "react";
import { Card, Row, Col, Skeleton } from "antd";
import style from "./Body.module.css";
import { useTranslation } from "react-i18next";

export default function Body() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    // // Simulate an API request or some asynchronous operation
    //    setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  }, []);
  return (
    <div className={style.body_block}>
      <div className={style.main_block}>
        {isLoading ? (
          <Row gutter={[16, 16]}>
            {[...Array(3)].map((_, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <Skeleton active />
              </Col>
            ))}
          </Row>
        ) : (
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className={style.card}>
                <img src="/img/hotel.jpg" alt="Hotel" />
                <div className={style.card_title}> {t("body_card.hotels")}</div>
                <div className={style.card_description}>
                  {t("body_card.hotels_description")}
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className={style.card}>
                <img src="/img/car-hire.jpg" alt="Car Hire" />
                <div className={style.card_title}>
                  {t("body_card.car_hire")}
                </div>
                <div className={style.card_description}>
                  {t("body_card.car_hire_description")}
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className={style.card}>
                <img src="/img//explore.jpg" alt="Explore" />
                <div className={style.card_title}>{t("body_card.explore")}</div>
                <div className={style.card_description}>
                  {t("body_card.explore_description")}
                </div>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}

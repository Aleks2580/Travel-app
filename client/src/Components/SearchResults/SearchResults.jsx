import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";
import style from "./SearchResults.module.css";
//import SearchHeader from "../Home/Header/SearchHeader/SearchHeader";
import { RollbackOutlined, CaretRightOutlined } from "@ant-design/icons";
import {
  Layout,
  Pagination,
  DatePicker,
  Button,
  Carousel,
  Collapse,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;

export default function SearchResults() {
  const location = useLocation();
  const flights = location.state?.flightsData || [];
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <Layout className={style.layout_main}>
      <RollbackOutlined onClick={handleGoBack} className={style.icon_back} />
      <Header className={style.header}>
        <div className={style.logo}>
          <img
            className={style.img_logo}
            src="./img/logo/logo3.png"
            alt="logo_jetsearch"
          />
          <div className={style.text_logo}>JetSearch</div>
        </div>
        <div className={style.route}>
          Shanghai (PVG) - London (HTR)
          <DatePicker className={style.date_to} />
          <DatePicker className={style.date_from} />
        </div>
      </Header>
      <Layout className={style.layout_secondary}>
        <Sider className={style.sider_left}>
          <Collapse
            className={style.collapse}
            bordered={false}
            defaultActiveKey={["1", "2", "3", "4"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel header="Stops" key="1" className={style.panel}>
              <p>Hello</p>
            </Panel>
            <Panel header="Departure times" key="2" className={style.panel}>
              <p>Hello</p>
            </Panel>
            <Panel header="Journey duration" key="3" className={style.panel}>
              <p>Hello</p>
            </Panel>
            <Panel header="Airlines" key="4" className={style.panel}>
              <p>Hello</p>
            </Panel>
          </Collapse>
        </Sider>
        <Content className={style.content}>
          <div className={style.flights}>
            {flights.map((flight, index) => (
              <SearchCard key={index} flight={flight} />
            ))}
            TICKETS
          </div>
          <Pagination />
        </Content>
        <Sider className={style.sider_right}>
          <div className={style.adds}>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_one}>
                <img
                  src="../../../../img/air-china.jpeg"
                  alt="airlines"
                  className={style.image_carousel}
                />
              </div>
            </a>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_three}>
                <Carousel autoplay className={style.carousel}>
                  <div>
                    <img
                      src="../../../../img/car-rent.jpg"
                      alt="car-rent"
                      className={style.image_carousel}
                    />
                  </div>
                  <div>
                    <img
                      src="../../../../img/airlines-add.jpg"
                      alt="airlines"
                      className={style.image_carousel}
                    />
                  </div>
                </Carousel>
              </div>
            </a>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_two}>
                <img
                  src="../../../../img/hilton.jpg"
                  alt="airlines"
                  className={style.image_carousel}
                />
                <Button
                  className={style.explore_hotels_button}
                  key="save"
                  type="primary"
                  // onClick={handleSave}
                >
                  {/* {t("modal_settings.button")} */}
                  Explore hotels
                </Button>
              </div>
            </a>
          </div>
        </Sider>
      </Layout>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  );
}

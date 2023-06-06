import React, { useState } from "react";
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
  Select,
  Empty,
} from "antd";
import dayjs from "dayjs";
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;

export default function SearchResults() {
  const location = useLocation();
  //const flights = location.state?.flightsData || [];
  const [flights, setFlights] = useState(location.state?.flightsData || []);
  const [dates, setDates] = useState({
    depart: location.state?.depart || "",
    return: location.state?.return || "",
  });
  const from = location.state?.from || [];
  const to = location.state?.to || [];
  const travellersAndClass = location.state?.travellersAndClass || {};
  console.log(travellersAndClass);
  // const depart = location.state?.depart || [];
  // const back = location.state?.return || [];
  // console.log("DePART", depart);
  // console.log("BACK", back);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePageChange = async () => {
    try {
      const response = await fetch("http://localhost:5555/search_flight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          dates,
          travellersAndClass,
          page: currentPage, // Pass the current page number
          pageSize: itemsPerPage, // Pass the items per page
        }),
      });

      const data = await response.json();
      // Update the flights state with the received flight results
      setFlights(data.data);
    } catch (error) {
      console.error("Error fetching flight results:", error);
      // Handle error case
    }
  };
  console.log(currentPage);
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
          {from} - {to}
          <DatePicker className={style.date_to} value={dayjs(dates.depart)} />
          {dates?.return?.length ? (
            <DatePicker
              className={style.date_from}
              value={dayjs(dates.return)}
            />
          ) : (
            ""
          )}
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
          {flights?.length ? (
            <>
              <div className={style.info_sort}>
                <span className={style.span_results}>
                  {flights?.length} results
                </span>
                <div>
                  <span className={style.span_sort_by}>Sort by</span>
                  <Select
                    defaultValue="Best"
                    style={{
                      width: 120,
                    }}
                    //onChange={handleChange}
                    options={[
                      {
                        value: "best",
                        label: "Best",
                      },
                      {
                        value: "Cheapest first",
                        label: "Cheapest first",
                      },
                      {
                        value: "Fastest firts",
                        label: "Fastest first",
                      },
                    ]}
                  />
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          <div className={style.flights}>
            {flights?.length ? (
              flights?.map((flight, index) => (
                <SearchCard key={index} flight={flight} />
              ))
            ) : (
              <Empty
                className={style.empty}
                description={<span>No tickets found. Please try again</span>}
              />
            )}
          </div>
          {flights?.length ? (
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={20}
              onChange={(page) => {
                setCurrentPage(page);
                handlePageChange();
              }}
            />
          ) : (
            ""
          )}
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

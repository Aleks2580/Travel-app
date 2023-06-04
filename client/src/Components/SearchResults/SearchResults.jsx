import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";
import style from "./SearchResults.module.css";
//import SearchHeader from "../Home/Header/SearchHeader/SearchHeader";
import { RollbackOutlined } from "@ant-design/icons";
import { Layout, Pagination, DatePicker } from "antd";
const { Header, Footer, Sider, Content } = Layout;

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
        <Sider className={style.sider_left}>Sider</Sider>
        <Content className={style.content}>
          {flights.map((flight, index) => (
            <SearchCard key={index} flight={flight} />
          ))}
          TICKETS
          <Pagination />
        </Content>
        <Sider className={style.sider_right}>
          <div className={style.adds}>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_one}>
                <span>
                  <svg>
                    <circle></circle>
                    <path></path>
                    <path></path>
                  </svg>
                </span>
                <button>SEARCH1</button>
              </div>
            </a>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_two}>
                <span>
                  <svg>
                    <circle></circle>
                    <path></path>
                    <path></path>
                  </svg>
                </span>
                <button>SEARCH2</button>
              </div>
            </a>
            <a href="/hotel-search" className={style.add_link}>
              <div className={style.add_three}>
                <span>
                  <svg>
                    <circle></circle>
                    <path></path>
                    <path></path>
                  </svg>
                </span>
                <button>SEARCH1</button>
              </div>
            </a>
          </div>
        </Sider>
      </Layout>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  );
}

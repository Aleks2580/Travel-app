import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";
import style from "./SearchResults.module.css";
//import SearchHeader from "../Home/Header/SearchHeader/SearchHeader";
import { RollbackOutlined } from "@ant-design/icons";
import { Layout } from "antd";
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
      <Header className={style.header}>HEADER</Header>
      <Layout className={style.layout_secondary}>
        <Sider className={style.sider_left}>Sider</Sider>
        <Content className={style.content}>
          {flights.map((flight, index) => (
            <SearchCard key={index} flight={flight} />
          ))}
          TICKETS
        </Content>
        <Sider className={style.sider_right}>Sider</Sider>
      </Layout>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  );
}

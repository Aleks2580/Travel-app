import React from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "./SearchCard/SearchCard";
import style from "./SearchResults.module.css";
import { Layout } from "antd";
import SearchHeader from "../Home/Header/SearchHeader/SearchHeader";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "15vh",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "75vh",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  height: "10vh",
};

export default function SearchResults() {
  const location = useLocation();
  const flights = location.state?.flightsData || [];
  return (
    <Layout>
      <Header style={headerStyle}>{/* <SearchHeader /> */}</Header>
      <Layout hasSider>
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>
          <div className={style.main}>
            {flights.map((flight, index) => (
              <SearchCard key={index} flight={flight} />
            ))}
            TICKETS
          </div>
        </Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

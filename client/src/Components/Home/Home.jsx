import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "../Footer/Footer";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

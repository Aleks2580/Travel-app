import React from "react";
import SearchHeader from "./SearchHeader/SearchHeader";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.main_block}>
      Home
      <SearchHeader />
    </div>
  );
}

import React, { useContext, useState } from "react";
import SearchHeader from "./SearchHeader/SearchHeader";
import style from "./Header.module.css";
import { GlobalOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ThemeContext } from "../../../App";
import ModalHeader from "./ModalHeader/ModalHeader";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSave = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const { t } = useTranslation();

  return (
    <>
      <div id={style[theme]} className={style.header_block}>
        <div className={style.main_block}>
          <div className={style.main_center_block}>
            <div className={style.left_block}>
              <div className={style.logo}>
                <img
                  className={style.img_logo}
                  src="./img/logo/logo3.png"
                  alt="logo_jetsearch"
                />
                <div className={style.text_logo}>JetSearch</div>
              </div>
            </div>
            <div className={style.right_block}>
              <div className={style.icon_world}>
                <Button
                  onClick={showModal}
                  id={style[theme]}
                  className={style.world_button}
                  type="primary"
                  icon={<GlobalOutlined className={style.icon_bold} />}
                />
              </div>
              <div className={style.user_block}>
                <Button
                  id={style[theme]}
                  className={style.user_button}
                  icon={<UserOutlined className={style.icon_bold} />}
                >
                  {t("header.login")}
                </Button>
              </div>
              <ModalHeader
                isModalOpen={isModalOpen}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleLanguageChange={handleLanguageChange}
                handleCurrencyChange={handleCurrencyChange}
                handleCountryChange={handleCountryChange}
                selectedLanguage={selectedLanguage}
                selectedCurrency={selectedCurrency}
                selectedCountry={selectedCountry}
              ></ModalHeader>
              <div className={style.icon_menu}>
                <Button
                  id={style[theme]}
                  className={style.menu_button}
                  type="primary"
                  icon={<MenuOutlined className={style.icon_bold} />}
                />
              </div>
            </div>
          </div>
          <SearchHeader />
        </div>
      </div>
    </>
  );
}

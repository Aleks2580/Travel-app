import React, { useContext, useState } from "react";
import SearchHeader from "./SearchHeader/SearchHeader";
import style from "./Header.module.css";
import { GlobalOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal, Select } from "antd";
import { ThemeContext } from "../../../App";

const { Option } = Select;

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
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <>
      <div className={style.header_block}>
        <div className={style.main_block}>
          <div className={style.main_center_block}>
            <div className={style.left_block}>
              <div className={style.logo}>
                <img
                  className={style.img_logo}
                  src="./img/logo/logo.png"
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
                  icon={<GlobalOutlined />}
                />
              </div>
              <div className={style.user_block}>
                <Button
                  id={style[theme]}
                  className={style.user_button}
                  icon={<UserOutlined />}
                >
                  Log in
                </Button>
              </div>
              <Modal
                title={
                  <h2 className={style.modal_settings_title}>
                    Regional settings{" "}
                  </h2>
                }
                open={isModalOpen}
                onOk={handleSave}
                onCancel={handleCancel}
                className={style.modal_settings}
                footer={[
                  <Button
                    className={style.modal_settings_button}
                    key="save"
                    type="primary"
                    onClick={handleSave}
                  >
                    Save
                  </Button>,
                ]}
              >
                <div className={style.dropdown_menu_settings}>
                  <label htmlFor="language-select">Language:</label>
                  <Select
                    className={style.select}
                    id="language-select"
                    defaultValue={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    <Option value="English">English</Option>
                    <Option value="Spanish">Spanish</Option>
                    <Option value="French">French</Option>
                  </Select>

                  <label htmlFor="currency-select">Currency:</label>
                  <Select
                    className={style.select}
                    id="currency-select"
                    defaultValue={selectedCurrency}
                    onChange={handleCurrencyChange}
                  >
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                  </Select>

                  <label htmlFor="country-select">Country/Region:</label>
                  <Select
                    className={style.select}
                    id="country-select"
                    defaultValue={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <Option value="United States">United States</Option>
                    <Option value="Canada">Canada</Option>
                    <Option value="Mexico">Mexico</Option>
                  </Select>
                </div>
              </Modal>
              <div className={style.icon_menu}>
                <Button
                  id={style[theme]}
                  className={style.menu_button}
                  type="primary"
                  icon={<MenuOutlined />}
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

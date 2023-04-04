import React from "react";
import style from "./ModalHeader.module.css";
import { Button, Modal, Select } from "antd";

const { Option } = Select;

export default function ModalHeader({
  isModalOpen,
  handleSave,
  handleCancel,
  handleLanguageChange,
  handleCurrencyChange,
  handleCountryChange,
  selectedLanguage,
  selectedCurrency,
  selectedCountry,
  theme,
}) {
  return (
    <Modal
      title={<h2 className={style.modal_settings_title}>Regional settings</h2>}
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
          <Option value="Spanish">Russian</Option>
        </Select>

        <label htmlFor="currency-select">Currency:</label>
        <Select
          className={style.select}
          id="currency-select"
          defaultValue={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <Option value="USD">USD</Option>
          <Option value="RUB">RUB</Option>
        </Select>

        <label htmlFor="country-select">Country/Region:</label>
        <Select
          className={style.select}
          id="country-select"
          defaultValue={selectedCountry}
          onChange={handleCountryChange}
        >
          <Option value="United States">United States</Option>
          <Option value="Russia">Russia</Option>
        </Select>
      </div>
    </Modal>
  );
}

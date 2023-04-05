import React from "react";
import style from "./ModalHeader.module.css";
import { Button, Modal, Select } from "antd";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Modal
      title={
        <h2 className={style.modal_settings_title}>
          {t("modal_settings.title")}
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
          {t("modal_settings.button")}
        </Button>,
      ]}
    >
      <div className={style.dropdown_menu_settings}>
        <label htmlFor="language-select">{t("modal_settings.language")}:</label>
        <Select
          className={style.select}
          id="language-select"
          defaultValue="English"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          <Option value="English">
            {t("modal_settings.language_english")}
          </Option>
          <Option value="Russian">
            {t("modal_settings.language_russian")}
          </Option>
        </Select>

        <label htmlFor="currency-select">{t("modal_settings.currency")}:</label>
        <Select
          className={style.select}
          id="currency-select"
          defaultValue={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <Option value="USD">{t("modal_settings.currency_dollar")}</Option>
          <Option value="RUB">{t("modal_settings.currency_rub")}</Option>
        </Select>

        <label htmlFor="country-select">
          {t("modal_settings.country_region")}
        </label>
        <Select
          className={style.select}
          id="country-select"
          defaultValue={selectedCountry}
          onChange={handleCountryChange}
        >
          <Option value="United States">
            {t("modal_settings.country_region_usa")}
          </Option>
          <Option value="Russia">
            {t("modal_settings.country_region_russia")}
          </Option>
        </Select>
      </div>
    </Modal>
  );
}

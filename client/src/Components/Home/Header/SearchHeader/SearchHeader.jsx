import React, { useContext, useState, useEffect } from "react";
import style from "./SearchHeader.module.css";
import { Input, DatePicker, Button, Checkbox, Modal, InputNumber } from "antd";
import { ThemeContext } from "../../../../App";
import { useTranslation } from "react-i18next";
import enUS from "antd/es/date-picker/locale/en_US";
import ruRU from "antd/es/date-picker/locale/ru_RU";

export default function SearchHeader() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [cabinClass, setCabinClass] = useState([]);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const antdLocale = i18n.language === "Russian" ? ruRU : enUS;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const options = [
    { label: t("modal_header_search.economy"), value: "economy" },
    { label: t("modal_header_search.business"), value: "business" },
    { label: t("modal_header_search.first"), value: "first" },
  ];

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCabinClassChange = (values) => {
    setCabinClass(values);
  };

  const handleAdultsChange = (value) => {
    setNumAdults(value);
  };

  const handleChildrenChange = (value) => {
    setNumChildren(value);
  };

  return (
    <div className={style.middle_block_search}>
      <div className={style.middle_text_block}>{t("header_search.motto")}</div>
      <div className={style.middle_main_block_search}>
        <div className={style.middle_input_first_country}>
          <Input
            className={style.input_first_country}
            placeholder={t("header_search.country_city")}
          />
          <span className={style.span_first_country}>
            {t("header_search.from")}:
          </span>
        </div>
        <div className={style.middle_input_second_country}>
          <Input
            className={style.input_second_country}
            placeholder={t("header_search.country_city")}
          />
          <span className={style.span_second_country}>
            {t("header_search.to")}:
          </span>
        </div>
        <div className={style.middle_input_first_date}>
          <DatePicker
            className={style.first_date}
            onChange={onChange}
            locale={antdLocale}
          />
          <span className={style.span_first_date}>
            {t("header_search.depart")}:
          </span>
        </div>
        <div className={style.middle_input_second_date}>
          <DatePicker
            className={style.second_date}
            onChange={onChange}
            locale={antdLocale}
          />
          <span className={style.span_second_date}>
            {t("header_search.return")}:
          </span>
        </div>
        <div
          className={style.middle_input_person}
          onClick={() => setVisible(true)}
        >
          <Input className={style.middle_person} readOnly />
          <span className={style.span_input_person}>
            {t("header_search.travellers")}:
          </span>
        </div>
        <Modal
          title={
            <span className={style["modal_title"]}>
              {t("modal_header_search.title")}
            </span>
          }
          open={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          transitionName=""
          className={style.ant_modal}
          footer={[
            <Button
              key="apply"
              type="primary"
              onClick={handleOk}
              className={style.modal_travellers_button}
            >
              {t("modal_header_search.apply_button")}
            </Button>,
          ]}
        >
          <div className={style.modal_content}>
            <div className={style.modal_row_checkboxes}>
              <span className={style.modal_label}>
                {t("modal_header_search.class")}
              </span>
              <div className={style.checkboxes}>
                <Checkbox.Group
                  options={options}
                  onChange={handleCabinClassChange}
                  className={style.checkbox_group_item}
                />
              </div>
            </div>
            <div className={style.modal_row_travellers}>
              <span className={style.modal_label}>
                {t("modal_header_search.adults")}
              </span>

              <InputNumber
                min={1}
                defaultValue={1}
                onChange={handleAdultsChange}
                className={style.input_number}
              />

              <span className={style.modal_label_age}>
                {t("modal_header_search.age_adults")}
              </span>
            </div>
            <div className={style.modal_row_travellers}>
              <span className={style.modal_label}>
                {t("modal_header_search.children")}
              </span>

              <InputNumber
                min={0}
                defaultValue={0}
                onChange={handleChildrenChange}
                className={style.input_number}
              />

              <span className={style.modal_label_age}>
                {t("modal_header_search.age_children")}
              </span>
            </div>
            <div className={style.modal_disclaimer}>
              <p>{t("modal_header_search.disclaimer_1")}</p>
              <p>{t("modal_header_search.disclaimer_2")}</p>
            </div>
          </div>
        </Modal>

        <div className={style.middle_button_search}>
          <Button className={style.btn_search_trips} type="primary">
            {t("header_search.search")}
          </Button>
        </div>
      </div>
      <div className={style.middle_checkbox_block}>
        <div className={style.checkbox_style}>
          <Checkbox
            className={`${style[`${theme}_checkbox`]}`}
            onChange={onCheck}
          >
            {t("header_search.direct_flights")}
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

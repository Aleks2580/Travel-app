import React, { useContext, useState } from "react";
import style from "./SearchHeader.module.css";
import { Input, DatePicker, Button, Checkbox, Modal, InputNumber } from "antd";
import { ThemeContext } from "../../../../App";
import { useTranslation } from "react-i18next";
import enUS from "antd/es/date-picker/locale/en_US";
import ruRU from "antd/es/date-picker/locale/ru_RU";

export default function SearchHeader() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const antdLocale = i18n.language === "Russian" ? ruRU : enUS;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [visible, setVisible] = useState(false);
  const [cabinClass, setCabinClass] = useState([]);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

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
          title="Choose options"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          transitionName=""
          className={style.ant_modal}
          footer={[
            <Button key="apply" type="primary" onClick={handleOk}>
              Apply
            </Button>,
          ]}
        >
          <div className={style.modal_content}>
            <div className={style.modal_row}>
              <span className={style.modal_label}>Choose class</span>
              <Checkbox.Group
                options={["Economy", "Business", "First"]}
                onChange={handleCabinClassChange}
              />
            </div>
            <div className={style.modal_row}>
              <span className={style.modal_label}>Adults</span>
              <InputNumber
                min={1}
                defaultValue={1}
                onChange={handleAdultsChange}
              />
              <span className={style.modal_label}>Aged 16+</span>
            </div>
            <div className={style.modal_row}>
              <span className={style.modal_label}>Children</span>
              <InputNumber
                min={0}
                defaultValue={0}
                onChange={handleChildrenChange}
              />
              <span className={style.modal_label}>Aged 0 to 15</span>
            </div>
            <div className={style.modal_disclaimer}>
              <p>
                Your age at time of travel must be valid for the age category
                booked. Airlines have restrictions on under 18s travelling
                alone.
              </p>
              <p>
                Age limits and policies for travelling with children may vary so
                please check with the airline before booking.
              </p>
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
    // </ConfigProvider>
  );
}

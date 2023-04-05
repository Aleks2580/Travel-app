import React, { useContext } from "react";
import style from "./SearchHeader.module.css";
import { Input, DatePicker, Button, Checkbox } from "antd";
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
        <div className={style.middle_input_person}>
          <Input className={style.middle_person} readOnly />
          <span className={style.span_input_person}>
            {t("header_search.travellers")}:
          </span>
        </div>
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

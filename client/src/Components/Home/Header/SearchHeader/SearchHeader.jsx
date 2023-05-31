import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./SearchHeader.module.css";
import {
  Input,
  DatePicker,
  Button,
  Checkbox,
  Modal,
  InputNumber,
  Skeleton,
  AutoComplete,
  Alert,
  Spin,
} from "antd";
import { ThemeContext } from "../../../../App";
import { useTranslation } from "react-i18next";
import enUS from "antd/es/date-picker/locale/en_US";
import ruRU from "antd/es/date-picker/locale/ru_RU";
import SearchResults from "../../../SearchResults/SearchResults";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [travellersAndClass, setTravellersAndClass] = useState({
    adults: 1,
    children: 0,
    class: "economy",
  });
  const [dates, setDates] = useState({ depart: "", return: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchIsLoading] = useState(false);

  const [term, setTerm] = useState("");
  const [termTwo, setTermTwo] = useState("");

  const [resultsFrom, setResultsFrom] = useState([]);
  const [resultsTo, setResultsTo] = useState([]);
  const [flightsData, setFlightsData] = useState(null);
  const antdLocale = i18n.language === "Russian" ? ruRU : enUS;

  const handleFromAutocomplete = async (from) => {
    setTerm(from);
    const response = await fetch(
      `http://localhost:5555/autocomplete?term=${from}`
    );
    const data = await response.json();
    console.log(`Autocomplete data: ${JSON.stringify(data)}`);
    setResultsFrom(data);
  };

  //console.log(term.code);

  const handleFromAutocompleteTwo = async (to) => {
    setTermTwo(to);
    const response = await fetch(
      `http://localhost:5555/autocomplete?term=${to}`
    );
    const data = await response.json();
    console.log(`Autocomplete data: ${JSON.stringify(data)}`);
    setResultsTo(data);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const onChangeDepart = (date, dateString) => {
    setDates((prev) => ({ ...prev, depart: dateString }));
  };

  const onChangeReturn = (date, dateString) => {
    setDates((prev) => ({ ...prev, return: dateString }));
  };

  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const options = [
    {
      label: t("modal_header_search.economy"),
      value: "economy",
      name: "class",
    },
    {
      label: t("modal_header_search.business"),
      value: "business",
      name: "class",
    },
    { label: t("modal_header_search.first"), value: "first", name: "class" },
  ];

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setTravellersAndClass({
      adults: 1,
      children: 0,
      class: "economy",
    });
    setVisible(false);
  };
  const handleCabinClassChange = (values) => {
    setTravellersAndClass((prevState) => ({
      ...prevState,
      class: values,
    }));
  };

  const handleAdultsChange = (value) => {
    setTravellersAndClass((prevState) => ({
      ...prevState,
      adults: value,
    }));
  };

  const handleChildrenChange = (value) => {
    setTravellersAndClass((prevState) => ({
      ...prevState,
      children: value,
    }));
  };

  const handleSearch = async () => {
    setSearchIsLoading(true);
    const response = await fetch("http://localhost:5555/search_flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: term,
        to: termTwo,
        dates,
        travellersAndClass,
      }),
    });

    const flights = await response.json();
    console.log(flights.data);
    setFlightsData(flights.data);
    navigate("/search-results", { state: { flightsData: flights.data } });
    setSearchIsLoading(false);
  };

  return (
    <div className={style.middle_block_search}>
      {isLoading ? (
        <div className={`${style.middle_main_block_search} ${style.skeleton}`}>
          <Skeleton active paragraph={{ rows: 2 }} />
        </div>
      ) : (
        <>
          <div className={style.middle_text_block}>
            {t("header_search.motto")}
          </div>
          <div className={style.middle_main_block_search}>
            <div className={style.middle_input_first_country}>
              <AutoComplete
                className={`${style.input_first_country} auto-complete`}
                options={Array.isArray(resultsFrom) ? resultsFrom : []}
                placeholder={t("header_search.country_city")}
                value={term}
                name="InputFrom"
                onChange={handleFromAutocomplete}
              />
              <span className={style.span_first_country}>
                {t("header_search.from")}:
              </span>
            </div>
            <div className={style.middle_input_second_country}>
              <AutoComplete
                className={style.input_second_country}
                options={Array.isArray(resultsTo) ? resultsTo : []}
                value={termTwo}
                name="InputTo"
                onChange={handleFromAutocompleteTwo}
                placeholder={t("header_search.country_city")}
              />
              <span className={style.span_second_country}>
                {t("header_search.to")}:
              </span>
            </div>
            <div className={style.middle_input_first_date}>
              <DatePicker
                className={style.first_date}
                onChange={onChangeDepart}
                locale={antdLocale}
                name="depart"
              />
              <span className={style.span_first_date}>
                {t("header_search.depart")}
              </span>
            </div>
            <div className={style.middle_input_second_date}>
              <DatePicker
                className={style.second_date}
                onChange={onChangeReturn}
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
              <Input
                className={style.middle_person}
                readOnly
                value={
                  travellersAndClass.adults +
                  " " +
                  `${travellersAndClass.adults === 1 ? "adult" : "adults"}` +
                  " " +
                  `${
                    travellersAndClass.children
                      ? travellersAndClass.children
                      : ""
                  }` +
                  `${travellersAndClass.children ? " " : ""}` +
                  `${
                    travellersAndClass.children
                      ? `${
                          travellersAndClass.children === 1
                            ? "child"
                            : "children"
                        }`
                      : ""
                  }` +
                  " " +
                  travellersAndClass.class
                }
              />
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
                      name="class"
                      onChange={handleCabinClassChange}
                      className={style.checkbox_group_item}
                      value={[...travellersAndClass.class]}
                    />
                  </div>
                </div>
                <div className={style.modal_row_travellers}>
                  <span className={style.modal_label}>
                    {t("modal_header_search.adults")}
                  </span>

                  <InputNumber
                    min={1}
                    defaultValue={travellersAndClass.adults}
                    onChange={handleAdultsChange}
                    className={style.input_number}
                    name="adults"
                    value={travellersAndClass.adults}
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
                    value={travellersAndClass.children}
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
              <Button
                className={style.btn_search_trips}
                type="primary"
                onClick={handleSearch}
              >
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
          {searchLoading ? <Spin tip="Loading..." /> : ""}
        </>
      )}
    </div>
  );
}

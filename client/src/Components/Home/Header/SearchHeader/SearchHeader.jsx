import React, { useContext } from "react";
import style from "./SearchHeader.module.css";
import { Input, DatePicker, Button, Checkbox } from "antd";
import { ThemeContext } from "../../../../App";

export default function SearchHeader() {
  const { theme } = useContext(ThemeContext);
  console.log("1", theme);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={style.middle_block_search}>
      <div className={style.middle_text_block}>Find your flight in a flash</div>
      <div className={style.middle_main_block_search}>
        <div className={style.middle_input_first_country}>
          <Input
            className={style.input_first_country}
            placeholder="Country, city or airport"
          />
          <span className={style.span_first_country}>From:</span>
        </div>
        <div className={style.middle_input_second_country}>
          <Input
            className={style.input_second_country}
            placeholder="Country, city or airport"
          />
          <span className={style.span_second_country}>To:</span>
        </div>
        <div className={style.middle_input_first_date}>
          <DatePicker className={style.first_date} onChange={onChange} />
          <span className={style.span_first_date}>Depart:</span>
        </div>
        <div className={style.middle_input_second_date}>
          <DatePicker className={style.second_date} onChange={onChange} />
          <span className={style.span_second_date}>Return:</span>
        </div>
        <div className={style.middle_input_person}>
          <Input className={style.middle_person} readOnly />
          <span className={style.span_input_person}>
            Travellers & cabin class:
          </span>
        </div>
        <div className={style.middle_button_search}>
          <Button className={style.btn_search_trips} type="primary">
            Search
          </Button>
        </div>
      </div>
      <div className={style.middle_checkbox_block}>
        <div className={style.checkbox_style}>
          <Checkbox
            className={`${style[`${theme}_checkbox`]}`}
            onChange={onCheck}
          >
            Direct flights
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

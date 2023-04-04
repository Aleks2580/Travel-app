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
            placeholder="From"
          ></Input>
        </div>
        <div className={style.middle_input_second_country}>
          <Input
            className={style.input_second_country}
            placeholder="Change country"
          ></Input>
        </div>
        <div className={style.middle_input_first_date}>
          <DatePicker className={style.first_date} onChange={onChange} />
        </div>
        <div className={style.middle_input_second_date}>
          <DatePicker className={style.second_date} onChange={onChange} />
        </div>
        <div className={style.middle_input_person}>
          <div className={style.persons_value}>ХУЙНЯ ЭТО ТЫ</div>
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
            id={style[theme]}
            className={style.checkbox_antd}
            onChange={onCheck}
          >
            Checkbox
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

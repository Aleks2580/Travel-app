import "./App.css";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useState, useEffect, createContext } from "react";
import { Switch, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Login from "./Components/Home/Login/Login";
import SearchResults from "./Components/SearchResults/SearchResults";
import {
  MessageTwoTone,
  QuestionCircleTwoTone,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoading, setIsLoading] = useState(true);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    i18n.changeLanguage(localStorage.getItem("language"));
    setIsLoading(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={style.app_main} id={style[theme]}>
        {isLoading ? (
          <div className={style.skeleton}>
            <Skeleton active size="large" paragraph={{ rows: 0 }} />
          </div>
        ) : (
          <>
            <Switch
              onChange={toggleTheme}
              className={style.switch}
              // checkedChildren={t("theme_switch.light")}
              unCheckedChildren={
                <div className={style.icon_container}>
                  <img
                    className={style.icon_switch}
                    src="./img/icons/sun.png"
                    alt="sun"
                  />
                </div>
              }
              // unCheckedChildren={t("theme_switch.dark")}
              checkedChildren={
                <div className={style.icon_container}>
                  <img
                    className={style.icon_switch}
                    src="./img/icons/moon.png"
                    alt="moon"
                  />
                </div>
              }
              checked={theme === "dark"}
            />
          </>
        )}
        <div className={style.icons}>
          <div className={style.div_chat}>
            <MessageOutlined className={style.icon_chat} />
            <span className={style.text_chat}>Chat with us</span>
          </div>
          <div className={style.div_help}>
            <QuestionCircleOutlined className={style.icon_help} />
            <span className={style.text_help}>Report an issue</span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import "./App.css";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
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
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={style.app_main} id={style[theme]}>
        <Switch
          onChange={toggleTheme}
          className={style.switch}
          checkedChildren={t("theme_switch.light")}
          unCheckedChildren={t("theme_switch.dark")}
          checked={theme === "dark"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

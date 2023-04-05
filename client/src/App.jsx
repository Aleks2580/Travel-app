import "./App.css";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { createContext } from "react";
import { useState } from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const { t } = useTranslation();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={style.app_main} id={style[theme]}>
        <Switch
          onChange={toggleTheme}
          className={style.switch}
          checkedChildren={t("theme_switch.light")}
          unCheckedChildren={t("theme_switch.dark")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

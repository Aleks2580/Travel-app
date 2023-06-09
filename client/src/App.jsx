import "./App.css";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { Switch, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Login from "./Components/Home/Login/Login";

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
          <Switch
            onChange={toggleTheme}
            className={style.switch}
            checkedChildren={t("theme_switch.light")}
            unCheckedChildren={t("theme_switch.dark")}
            checked={theme === "dark"}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

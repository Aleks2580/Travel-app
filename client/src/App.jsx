import "./App.css";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { createContext } from "react";
import { useState } from "react";
import { Switch, theme } from "antd";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={style[theme]}>
        <Switch
          onChange={toggleTheme}
          className={style.switch}
          checkedChildren="light"
          unCheckedChildren="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import React from 'react';
import Portfolio from './Portfolio';
import useLocalStorage from "use-local-storage";
import "./Portfolio.css";



function App() {
const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

const switchTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
};


  return (
    <div className="App" data-theme={theme}>
      <div className="themeToggle">
        <i className="fa-regular fa-moon" onClick={switchTheme}></i>
      </div>
      <Portfolio />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling
import lightMode from "./assets/lightMode.png"
import darkMode from "./assets/darkMode.png"

const App = () => {
  
  //Make use of UseState hook
  const [isDarkMode, setDarkMode]=useState(false);

  //Setting dark mode
  const toggleDarkMode =() => {
    setDarkMode(!isDarkMode);
  }

  // Dynamic styles based on dark mode state
  const appStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    height: "98.14vh",
    width: "98.59999vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "20px",
    cursor: "pointer",
    backgroundColor:"white",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  return (
    <div style={appStyle}>
      <button style={buttonStyle} onClick={toggleDarkMode}>
        {isDarkMode ? <img src={lightMode} alt="Dark Mode" /> : <img src={darkMode} alt="Light Mode" />}
      </button>
    </div>
  );
};

export default App;
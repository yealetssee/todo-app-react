import { createContext, useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <main id={theme}>
        <div className="bgPhoto"></div>
        <ToDo></ToDo>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

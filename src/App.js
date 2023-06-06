import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./components/Routes/appRoutes";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  function changeModes() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <NavBar changeModes={changeModes} />
        <AppRoutes />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;

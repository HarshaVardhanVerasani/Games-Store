import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar({ changeModes }) {
  let theme = useContext(ThemeContext);
  let navigate = useNavigate()
  return (
    <nav className="nav">
      <div className="container">
        <div onClick={() => navigate("/")}>
          <i className="fa-solid fa-house-chimney fa-2xl"></i>
        </div>
        {theme === "light" && (
          <div onClick={changeModes}>
            <i
              className="fa-solid fa-sun fa-2xl"
              style={{ color: "#f4c210" }}
            ></i>
          </div>
        )}
        {theme === "dark" && (
          <div onClick={changeModes}>
            <i className="fa-regular fa-moon fa-2xl"></i>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

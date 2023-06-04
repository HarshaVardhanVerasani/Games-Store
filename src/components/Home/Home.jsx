import { Link } from "react-router-dom";
import drum from "./images/drumkit.jpg";
import guess from "./images/guess number.jpg";
import hangman from "./images/hangman.jpeg";
import tictactoe from "./images/tictactoe.png";
import  "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="links">
        <Link to="/tic-tac-toe">
          <img src={tictactoe} alt="tic tac toe" />
        </Link>
        <Link to="/guess-the-number">
          <img src={guess} alt="guess number" />
        </Link>
        <Link to="/drum-kit">
          <img src={drum} alt="drum kit" />
        </Link>
        <Link to="/hangman">
          <img src={hangman} alt="hangman" />
        </Link>
      </div>
    </section>
  );
};

export default Home;


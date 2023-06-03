import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      <Link to="/guess-the-number">Guess The Number</Link>
      <Link to="/drum-kit">Drum kit</Link>
      <Link to="/hangman">Hang Man</Link>
    </div>
  );
};

export default Home;

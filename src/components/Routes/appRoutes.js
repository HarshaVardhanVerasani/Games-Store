import { Route, Routes } from "react-router-dom";
import DrumKit from "../Drumkit/DrumKit.jsx";
import GuessTheNumber from "../GuessTheNumber/GuessTheNumber.jsx";
import Hangman from "../Hangman/Hangman.jsx";
import Home from "../Home/Home.jsx";
import TicTacToe from "../TicTacToe/TicTacToe.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/guess-the-number" element={<GuessTheNumber />} />
      <Route path="/drum-kit" element={<DrumKit />}></Route>
      <Route path="/hangman" element={<Hangman />}></Route>
    </Routes>
  );
};

export default AppRoutes;

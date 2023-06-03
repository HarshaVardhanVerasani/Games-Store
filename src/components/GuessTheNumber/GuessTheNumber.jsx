import { useState } from "react";
import { toast } from "react-toastify";
import "./GuessTheNumber.css";

let numbersArray = Array(1000)
  .fill(null)
  .map((c, i) => i + 1);

const GuessTheNumber = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [number, setNumber] = useState(numbersArray[randomIndex]);
  const [isWon, setIsWon] = useState(false);
  const [guessedNum, setGuessedNum] = useState("");
  const [wrongGuesses, setWrongGuess] = useState([]);

  function handleGuess(e) {
    if (isWon) {
      toast.warn("Restart The Game")
      return;
    }

    if (
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "KBD" ||
      e.key === "Enter"
    ) {
      if (Number(guessedNum) === number) {
        setIsWon(true);
      } else {
        if (Math.abs(guessedNum - number) <= 5) {
          toast.info("Your'e almost there");
        } else if (number < guessedNum) {
          toast("hey guessed number is too far");
        } else {
          toast("hey guessed number is too low");
        }
        let copyWrongGuess = [...wrongGuesses];
        copyWrongGuess.push(guessedNum);
        setWrongGuess(copyWrongGuess);
      }
    }
  }

  function changeIndex() {
    let n = Math.floor(Math.random() * numbersArray.length);
    setRandomIndex(n);
    setNumber(numbersArray[n]);
    setIsWon(false);
    setGuessedNum("");
    setWrongGuess([]);
    console.log(numbersArray[n]);
  }

  return (
    <div className="number-guesser-wrapper">
      <div className="wrong-guess-list-section">
        <details>
          <summary>Clue</summary>
          <p>
            Numbers <br /> Are Ranging <br /> From 1 To 1000
          </p>
        </details>
        <h3>Wrong Guess</h3>
        <div className="list">
          {wrongGuesses.map((el, i, wrongGuesses) => {
            if (i === 0) {
              return (
                <p style={{ color: "red" }} key={i}>
                  P/g {wrongGuesses[wrongGuesses.length - 1 - i]}
                </p>
              );
            } else {
              return <p key={i}>{wrongGuesses[wrongGuesses.length - 1 - i]}</p>;
            }
          })}
        </div>
      </div>
      <div className="container">
        {isWon && (
          <h1 style={{ color: "green"}}>Correct</h1>
        )}
        <input
          type="text"
          id="number-input"
          value={guessedNum}
          onChange={(e) => setGuessedNum(e.target.value)}
          onKeyDown={handleGuess}
        />
        <button onClick={handleGuess} className="button-27">
          <kbd>&#x21A9; Enter </kbd>
        </button>
        {isWon && <h2 onClick={changeIndex}>🔃</h2>}
      </div>
    </div>
  );
};
export default GuessTheNumber;

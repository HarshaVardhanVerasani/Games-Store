import { useEffect, useState } from "react";
import "./Hangman.css";

let WordsArray = [
  "strawberry",
  "mango",
  "papaya",
  "banana",
  "apple",
  "grapes",
  "kiwi",
];

let lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Hangman = () => {
  const [word, setWord] = useState();
  const [displayWord, setDisplayWord] = useState([]);
  const [obj, setObj] = useState({
    chances: 0,
    wrongLetters: "",
    isWon: false,
    isLost: false,
  });

  function handleButtonClick(e) {

    if(obj.isWon || obj.isLost){
        return
    }

    if (e.target.tagName === "BUTTON") {
      let letter = e.target.value;
      let copyDisplayWord = [...displayWord];

      for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
          copyDisplayWord[i] = letter;
        }
        checkForWin(copyDisplayWord);
      }
      checkForWrongGuess(letter);
      setDisplayWord(copyDisplayWord);
    }
  }

  function checkForWrongGuess(letter) {
    if (word.includes(letter) === false) {
      if (obj.chances > 1) {
        setObj({
          ...obj,
          chances: obj.chances - 1,
          wrongLetters: obj.wrongLetters + letter,
        });
      } else if (obj.chances === 1) {
        setObj({
          ...obj,
          isLost: true,
          chances: obj.chances - 1,
          wrongLetters: obj.wrongLetters + letter,
        });

      }
    }
  }

  function checkForWin(displayWord) {
    if (displayWord.every((curr) => curr !== null)) {
      setObj({
        ...obj,
        isWon: true,
      });
    }
  }

  function handleReset(){
     let index = Math.floor(Math.random() * WordsArray.length);
     let str = WordsArray[index];
     setWord(str);
    setDisplayWord(Array(str.length).fill(null))
    setObj({
      chances: str.length-1,
      wrongLetters: "",
      isWon: false,
      isLost: false,
    });
  }

  useEffect(() => {
    let index = Math.floor(Math.random() * WordsArray.length);
    let str = WordsArray[index];
    setWord(str);
    setDisplayWord(Array(str.length).fill(null));
    setObj({ ...obj, chances: str.length - 1 });
  }, []);

  useEffect(() => {
    if (obj.isLost) {
      let revealWord = word.split("");
      setDisplayWord(revealWord);
    }
  }, [obj.isLost]);

  return (
    <section className="hangman-wrapper">
      <section className="remaining-chances">
        <h3>
          Reaming Chances : <b style={{ color: "red" }}> {obj.chances}</b>
        </h3>
      </section>

      {obj.isWon && (
        <section className="winner-section" style={{ color: "green" }}>
          <h3>You Won The Game</h3>
        </section>
      )}

      {obj.isLost && (
        <section className="loose-section" style={{ color: "crimson" }}>
          <h3>You Lost Game</h3>
          <p>Check What You Missed Letters</p>
        </section>
      )}

      <section className="displayWord">
        {displayWord.length !== 0 &&
          displayWord.map((curr, i) => (
            <p className="letter" id={i} key={i}>
              {curr}
            </p>
          ))}
      </section>


      <section className="alphabets" onClick={handleButtonClick}>
        {lettersArray.map((curr, i) => {
          if (displayWord.join("").includes(curr)) {
            return (
              <button
                key={i}
                value={curr}
                disabled={true}
                className="correct-letter"
              >
                {curr}
              </button>
            );
          } else if (obj.wrongLetters.includes(curr)) {
            return (
              <button
                key={i}
                value={curr}
                disabled={true}
                className="wrong-letter"
              >
                {curr}
              </button>
            );
          } else {
            return (
              <button key={i} value={curr}>
                {curr}
              </button>
            );
          }
        })}
      </section>
      <section className="reset">
        <button onClick={handleReset} className="button-92">Refresh</button>
      </section>
    </section>
  );
};

export default Hangman;

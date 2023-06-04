import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./tictactoe.css";

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("x");
  const [playersData, setPlayersData] = useState({
    name_1: "",
    name_2: "",
    score_1: 0,
    score_2: 0,
    winner: null,
  });
  const [toggle, setToggle] = useState(false);

  function handleCellClick(e) {
    if (playersData.name_1 === "" || playersData.name_2 === "") {
      toast("Please Enter The Players Names");
      return;
    }

    if (playersData.winner !== null) {
      if (playersData.winner === "Draw") {
        toast(`The Game Is Draw Clear The Board`);
      } else if (playersData.winner === "x") {
        toast(`${playersData.name_1} Won The Game`);
      } else if (playersData.winner === "o") {
        toast(`${playersData.name_2} Won The Game`);
      }
      return;
    }

    if (e.target.tagName === "BUTTON") {
      if (data[+e.target.id] === "x" || data[+e.target.id] === "o") {
        return;
      }
      let copyData = [...data];
      copyData[+e.target.id] = turn;
      setData(copyData);
      turn === "x" ? setTurn("o") : setTurn("x");
      winnerCheck(copyData);
    }
  }

  function winnerCheck(data) {
    if (data[1] !== undefined && data[0] === data[1] && data[1] === data[2]) {
      setPlayersData({ ...playersData, winner: data[0] });
    } else if (
      data[3] !== undefined &&
      data[3] === data[4] &&
      data[4] === data[5]
    ) {
      setPlayersData({ ...playersData, winner: data[3] });
    } else if (
      data[7] !== undefined &&
      data[6] === data[7] &&
      data[7] === data[8]
    ) {
      setPlayersData({ ...playersData, winner: data[6] });
    } else if (
      data[6] !== undefined &&
      data[0] === data[3] &&
      data[3] === data[6]
    ) {
      setPlayersData({ ...playersData, winner: data[0] });
    } else if (
      data[4] !== undefined &&
      data[1] === data[4] &&
      data[4] === data[7]
    ) {
      setPlayersData({ ...playersData, winner: data[1] });
    } else if (
      data[5] !== undefined &&
      data[2] === data[5] &&
      data[5] === data[8]
    ) {
      setPlayersData({ ...playersData, winner: data[2] });
    } else if (
      data[0] !== undefined &&
      data[0] === data[4] &&
      data[4] === data[8]
    ) {
      setPlayersData({ ...playersData, winner: data[0] });
    } else if (
      data[2] !== undefined &&
      data[2] === data[4] &&
      data[4] === data[6]
    ) {
      setPlayersData({ ...playersData, winner: data[2] });
    } else if (data.every((el) => el !== null)) {
      setPlayersData({ ...playersData, winner: "Draw" });
    }
  }

  useEffect(() => {
    if (playersData.winner === "x") {
      setPlayersData({ ...playersData, score_1: playersData.score_1 + 1 });
    } else if (playersData.winner === "o") {
      setPlayersData({ ...playersData, score_2: playersData.score_2 + 1 });
    }
  }, [playersData.winner]);

  function handleResetOrRefresh(e) {
    if (e.target.name === "clear") {
      setData(Array(9).fill(null));
      setTurn("x");
      setPlayersData({
        ...playersData,
        winner: null,
      });
    } 
    else if (e.target.name === "restart") {
      setData(Array(9).fill(null));
      setTurn("x");
      setPlayersData({
        name_1: "",
        name_2: "",
        score_1: 0,
        score_2: 0,
        winner: null,
      });
      setToggle(false);
    }
  }

  return (
    <div className="tic-tac-toe-wrapper">
      {toggle === false && (
        <div className="players-input-section">
          <div>
            <b>Player 1</b>
            <input
              type="text"
              value={playersData.name_1}
              onInput={(e) =>
                setPlayersData({ ...playersData, name_1: e.target.value })
              }
            />
            <br />
            <b>Player 2</b>
            <input
              type="text"
              value={playersData.name_2}
              onInput={(e) =>
                setPlayersData({ ...playersData, name_2: e.target.value })
              }
            />
          </div>
          <button className="btn" onClick={() => setToggle(true)}>
            ✅
          </button>
        </div>
      )}

      {toggle && (
        <div className="players-progress">
          <div className="players-scores">
            <h2 style={{ opacity: "0.4" }}>X</h2>
            <h3 style={{ color: "crimson" }}>{playersData.name_1}</h3>
            <h2 style={{ color: "crimson" }}>
              <b>{playersData.score_1}</b>
            </h2>
          </div>
          <div className="players-scores">
            <h2 style={{ opacity: "0.4" }}>O</h2>
            <h3 style={{ color: "purple" }}>{playersData.name_2}</h3>
            <h2 style={{ color: "purple" }}>
              <b>{playersData.score_2}</b>
            </h2>
          </div>
        </div>
      )}

      <div className="container">
        <div className="winner-section">
          {playersData.winner === "x" && (
            <h2 className="win">{playersData.name_1} Won</h2>
          )}
          {playersData.winner === "o" && (
            <h2 className="win">{playersData.name_2} Won</h2>
          )}
          {playersData.winner === "Draw" && <h2 className="draw">Draw</h2>}
        </div>
        <div className="board" onClick={handleCellClick}>
          {data.map((curr, i) => (
            <button className={`cell ${data[i]}`} id={i} key={i}></button>
          ))}
        </div>
        <div className="reset-section">
          <button
            onClick={handleResetOrRefresh}
            name="clear"
            className="button-29"
          >
            Clear Board
          </button>
          <button
            onClick={handleResetOrRefresh}
            name="restart"
            className="button-30"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;

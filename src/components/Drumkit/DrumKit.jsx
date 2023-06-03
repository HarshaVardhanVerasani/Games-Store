import { useEffect } from "react";
import "./DrumKit.css";
import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

const DrumKit = () => {
  function handlePlaySound(e) {
    let arr = e.target.querySelectorAll(".button-6");
    for (let el of arr) {
      if (el.name.toLowerCase() === e.key) {
        el.classList.add("flash");
        setTimeout(() => {
          el.classList.remove("flash");
        }, 300);
      }
    }

    if (e.target.tagName === "BUTTON" || e.type === "keydown") {
      if (e.target.name === "A" || e.key === "a") {
        new Audio(boom).play();
      } else if (e.target.name === "S" || e.key === "s") {
        new Audio(clap).play();
      } else if (e.target.name === "D" || e.key === "d") {
        new Audio(hihat).play();
      } else if (e.target.name === "F" || e.key === "f") {
        new Audio(kick).play();
      } else if (e.target.name === "G" || e.key === "g") {
        new Audio(openhat).play();
      } else if (e.target.name === "H" || e.key === "h") {
        new Audio(ride).play();
      } else if (e.target.name === "J" || e.key === "j") {
        new Audio(snare).play();
      } else if (e.target.name === "K" || e.key === "k") {
        new Audio(tink).play();
      } else if (e.target.name === "L" || e.key === "l") {
        new Audio(tom).play();
      }
    }
  }

  useEffect(() => {
    //adding event listener to document when component is mounted
    document.addEventListener("keydown", handlePlaySound);

    //removing event listener from document when component is destroyed
    return () => {
      document.removeEventListener("keydown", handlePlaySound);
    };
  }, []);

  return (
    <section className="drum-kit-wrapper">
      <div className="key-buttons">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((cur) => (
          <button
            name={cur}
            onClick={handlePlaySound}
            key={cur}
            className="button-6"
          >
            {cur}
          </button>
        ))}
      </div>
      <div className="better-experience">
        <p>Use HeadPhones For Better Experience</p>
      </div>
    </section>
  );
};
export default DrumKit;

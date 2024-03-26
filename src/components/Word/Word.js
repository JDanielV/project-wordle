import React from "react";
import { range } from "../../utils";

function Word({ word, isGuess }) {
  return (
    <li className="guess">
      {range(5).map((num) => {
        const cellClass = isGuess ? word[num]?.status : "";

        return (
          <span key={num} className={`cell ${cellClass}`}>
            {word ? word[num]?.letter : ""}
          </span>
        );
      })}
    </li>
  );
}

export default Word;

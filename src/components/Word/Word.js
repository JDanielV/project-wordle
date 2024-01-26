import React from "react";
import { range } from "../../utils";

function Word({ word }) {
  return (
    <li className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {word ? word[num] : ""}
        </span>
      ))}
    </li>
  );
}

export default Word;

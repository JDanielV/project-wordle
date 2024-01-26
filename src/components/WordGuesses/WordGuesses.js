import React from "react";
import Word from "../Word/Word";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function WordGuesses({ words }) {
  return (
    <ul className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Word key={num} word={words[num]} />
      ))}
    </ul>
  );
}

export default WordGuesses;

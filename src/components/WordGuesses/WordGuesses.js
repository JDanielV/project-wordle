import React from "react";
import Word from "../Word/Word";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function WordGuesses({ words, handleSetGameStatus, winWord }) {
  return (
    <ul className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const checkedGuess = checkGuess(words[num], winWord);
        const isGuess = checkedGuess != null;
        const isCorrectGuess =
          isGuess && checkedGuess.every((guess) => guess.status === "correct");

        if (isCorrectGuess && words.length <= NUM_OF_GUESSES_ALLOWED) {
          handleSetGameStatus("win");
        } else if (!isCorrectGuess && words.length === NUM_OF_GUESSES_ALLOWED) {
          handleSetGameStatus("lose");
        }

        return (
          <Word
            key={num}
            word={isGuess ? checkedGuess : words[num]}
            isGuess={isGuess}
          />
        );
      })}
    </ul>
  );
}

export default WordGuesses;

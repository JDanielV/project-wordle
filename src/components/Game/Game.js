import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import WordGuesses from "../WordGuesses/WordGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("pending");
  const [winWord, setWinWord] = React.useState("TESTT");

  const handleAddWord = (word) => {
    if (words.length < NUM_OF_GUESSES_ALLOWED) {
      const nextWords = [...words, word];
      setWords(nextWords);
    }
  };

  const handleSetGameStatus = (newStatus) => {
    setGameStatus(newStatus);
  };

  return (
    <>
      <WordGuesses
        words={words}
        handleSetGameStatus={handleSetGameStatus}
        winWord={winWord}
      />

      {gameStatus === "pending" ? (
        <WordInput handleAddWord={handleAddWord} />
      ) : gameStatus === "win" ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {words.length} guesses</strong>.
          </p>
        </div>
      ) : (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{winWord}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;

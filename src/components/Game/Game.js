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

  const handleAddWord = (word) => {
    if (words.length < NUM_OF_GUESSES_ALLOWED) {
      const nextWords = [...words, word];
      setWords(nextWords);
    }
  };

  return (
    <>
      <WordGuesses words={words} />
      <WordInput handleAddWord={handleAddWord} />
    </>
  );
}

export default Game;

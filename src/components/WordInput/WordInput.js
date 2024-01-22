import React, { useState } from "react";

function WordInput() {
  const [word, setWord] = useState("");

  const handleInput = (e) => {
    const nextValue = e.target.value.toUpperCase();

    if (nextValue.length <= 5) {
      setWord(nextValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.length !== 5) {
      return;
    }

    // submits here
    console.log(word);

    setWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        value={word}
        onChange={handleInput}
      />
    </form>
  );
}

export default WordInput;

import React from "react";

function GuessInput({guessArr, setGuessArr}) {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuessArr([...guessArr, input]);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        minLength={5}
        maxLength={5}
        required
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

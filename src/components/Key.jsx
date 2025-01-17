import React from "react";
import clsx from "clsx";

const Key = ({ letter, addGuessedLetters, statusClass }) => {
  return (
    <button
      onClick={addGuessedLetters}
      className={clsx("key", {
        key__correct: statusClass === "correct",
        key__incorrect: statusClass === "incorrect",
      })}
    >
      {letter}
    </button>
  );
};

export default Key;

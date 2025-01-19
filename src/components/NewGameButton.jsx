import React from "react";

const newGameButton = ({ startNewGame }) => {
  return (
    <button onClick={startNewGame} className="button">
      New Game
    </button>
  );
};

export default newGameButton;

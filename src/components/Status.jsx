import React from "react";
import { getFarewellText } from "../utils";

const Status = ({
  isGameWon,
  isGameOver,
  deadLanguage,
  lastGuessedIncorrect,
}) => {
  return (
    <>
      {isGameOver ? (
        isGameWon ? (
          <section className="status__win">
            <h2 className="status__h2">You win!</h2>
            <p className="status__p">Well done 🎉</p>
          </section>
        ) : (
          <section className="status__lose">
            <h2 className="status__h2">Game over!</h2>
            <p className="status__p">
              You lose! Better start learning Assembly 😭
            </p>
          </section>
        )
      ) : deadLanguage && lastGuessedIncorrect ? (
        <section className="status__farewell">
          <p className="status__p">{getFarewellText(deadLanguage.name)}</p>
        </section>
      ) : (
        <section className="status__empty"></section>
      )}
    </>
  );
};

export default Status;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Language from "./components/Language";
import { languages } from "./languages";
import Character from "./components/Character";
import Key from "./components/Key";
import NewGameButton from "./components/NewGameButton";

const App = () => {
  const [chips, setChips] = useState(languages);
  const [currentWord, setCurrentWord] = useState("estate");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");

  const addGuessedLetters = (letter) => {
    if (!currentWord.includes(letter) && !guessedLetters.includes(letter)) {
      setWrongGuessCount((prevCount) => prevCount + 1);
    }
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  };

  useEffect(() => {
    console.log(wrongGuessCount);
  }, [wrongGuessCount]);

  const keys = alphabetArray.map((letter, idx) => {
    const statusClass = currentWord.includes(letter)
      ? guessedLetters.includes(letter)
        ? "correct"
        : null
      : guessedLetters.includes(letter)
      ? "incorrect"
      : null;
    return (
      <Key
        addGuessedLetters={() => addGuessedLetters(letter)}
        key={idx}
        letter={letter}
        statusClass={statusClass}
      />
    );
  });

  const charArray = currentWord.split("");
  const currentWordChars = charArray.map((ch, idx) => (
    <Character key={idx} char={guessedLetters.includes(ch) ? ch : ""} />
  ));

  const languageChips = chips.map((chip, idx) => {
    const isLanguageLost = idx < wrongGuessCount;
    return (
      <Language
        key={chip.name}
        name={chip.name}
        color={chip.color}
        backgroundColor={chip.backgroundColor}
        isLanguageLost={isLanguageLost}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <Status />
      <section className="languages__container">{languageChips}</section>
      <section className="characters__container">{currentWordChars}</section>
      <section className="keyboard__container">{keys}</section>
      <NewGameButton />
    </div>
  );
};

export default App;

import { useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Language from "./components/Language";
import { languages } from "./languages";
import Character from "./components/Character";
import Key from "./components/Key";

const App = () => {
  const [chips, setChips] = useState(languages);
  const [currentWord, setCurrentWord] = useState("REACT");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");

  const keys = alphabetArray.map((letter, idx) => (
    <Key key={idx} letter={letter} />
  ));

  const charArray = currentWord.split("");
  const currentWordChars = charArray.map((ch, idx) => (
    <Character key={idx} char={ch} />
  ));

  const languageChips = chips.map((chip) => (
    <Language
      key={chip.name}
      name={chip.name}
      color={chip.color}
      backgroundColor={chip.backgroundColor}
    />
  ));

  return (
    <div className="App">
      <Header />
      <Status />
      <div className="languages__container">{languageChips}</div>
      <div className="characters__container">{currentWordChars}</div>
      <div className="keyboard__container">{keys}</div>
    </div>
  );
};

export default App;

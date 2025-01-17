import { useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Language from "./components/Language";
import { languages } from "./languages";

const App = () => {
  const [chips, setChips] = useState(languages);

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
    </div>
  );
};

export default App;

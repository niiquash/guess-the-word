import React from "react";

const Character = ({ char1, char2, isGameLost }) => {
  return <span className="character">{isGameLost ? char2 : char1}</span>;
};

export default Character;

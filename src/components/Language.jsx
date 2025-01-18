import React from "react";

const Language = ({ name, backgroundColor, color, isLanguageLost }) => {
  const styles = {
    backgroundColor,
    color,
  };

  return (
    <div className={isLanguageLost ? "language__overlay" : ""}>
      <div className="language" style={styles}>
        {name}
      </div>
    </div>
  );
};

export default Language;

import Game from "./Games";
import { useState } from "react";

const Checklist = () => {
  const [gamesCount, setGamesCount] = useState(0);

  const handleCheckboxChange = (checkedState) => {
    const count = checkedState.filter(Boolean).length;
    setGamesCount(count);
  };

  return (
    <div>
      <div>
        <h1>What is your VARIETY gamer score?</h1>
        <h2>
          Which of these Video Game Series did you play (at least one game of?)
          One point per box checked!
        </h2>
        <h2>{gamesCount}/144</h2>
        <Game handleCheckboxChange={handleCheckboxChange} />
      </div>
    </div>
  );
};

export default Checklist;

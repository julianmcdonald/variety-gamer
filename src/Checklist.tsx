import Game from "./Games";
import { useState } from "react";
import gamesList from "./gamesList";

const Checklist = () => {
  const [gamesCount, setGamesCount] = useState(0);

  const totalGames: number = gamesList.length;

  const handleCheckboxChange = (checkedState) => {
    const count: number = checkedState.filter(Boolean).length;
    setGamesCount(count);
  };

  return (
    <div>
      <h1>What is your VARIETY gamer score?</h1>
      <h2>
        Which of these Video Game Series did you play (at least one game of?)
        One point per box checked!
      </h2>
      <h2>
        {gamesCount}/{totalGames}
      </h2>
      <Game handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default Checklist;

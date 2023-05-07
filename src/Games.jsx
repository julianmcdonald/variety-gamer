import gamesList from "./gamesList";
import { useState } from "react";

const Game = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(gamesList.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    props.handleCheckboxChange(updatedCheckedState);
  };

  return (
    <div className="wrapper">
      {gamesList.map((game, index) => {
        return (
          <label
            className={`checkbox ${checkedState[index] ? "active" : ""}`}
            htmlFor={`game-${index}`}
            key={index}
          >
            <input
              type="checkbox"
              id={`game-${index}`}
              name="game"
              value={game}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            {game}
          </label>
        );
      })}
    </div>
  );
};

export default Game;

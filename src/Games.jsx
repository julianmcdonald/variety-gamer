import { gamesList } from "./gamesList";
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
    <div>
      {gamesList.map((game, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={`game-${index}`}
              name="game"
              value={game}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={`game-${index}`}>{game}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Game;

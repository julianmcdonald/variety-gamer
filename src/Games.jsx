import { gamesList } from "./gamesList";

const Game = () => {
  const Games = gamesList.map((g) => (
    <div>
      <input type="checkbox" id="game" name="game" />
      {g}
    </div>
  ));

  return Games;
};

export default Game;

import { gamesList } from "./gamesList";

const Game = () => {
  const Games = gamesList.map((g) => <div>{g}</div>);
  return Games;
};

export default Game;

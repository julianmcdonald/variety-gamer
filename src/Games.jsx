export const gamesList = [
  "Counter-Strike",
  "CoD",
  "Medal of Honor",
  "Doom",
  "Unreal",
  "Halo",
  "Quake",
  "Far Cry",
  "Gears of War",
  "Splatoon",
  "Battlefield",
];

const Game = (games) => {
  for (let i = 0; i < games.length; i++) {
    console.log(games);
    // return <div>{<h3>{games[i]}</h3>}</div>;
  }
  return;
};

export default Game;

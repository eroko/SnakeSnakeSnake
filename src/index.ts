// import styles
import "./style/index.less";

// import classes
import GameControl from "./modules/GameControl";

const gameControl = new GameControl();
gameControl.init();

// setInterval(() => {
//   console.log(gameControl.direction);
// }, 1000);

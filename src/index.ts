// import styles
import "./style/index.less";

// import classes
import Food from "./modules/Food";
import ScorePanel from "./modules/ScorePanel";

const scorePanel = new ScorePanel();

setInterval((): void => {
  scorePanel.addScore();
}, 100);

import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }

  // create a prop to store snake's direction
  direction: string = "";

  // if snake is alive
  alive: boolean = true;
  // init game
  init() {
    document.addEventListener("keydown", this.keydownHandler);
    this.run();
  }

  // Create a response function for the keyboard event
  keydownHandler = (event: KeyboardEvent): void => {
    console.log(event.key);
    const allowKey: Array<string> = [
      "Up",
      "Down",
      "Left",
      "Right",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (allowKey.includes(event.key)) this.direction = event.key;
  };

  // create a function to control snake moving
  run() {
    let x = this.snake.x;
    let y = this.snake.y;
    switch (this.direction) {
      case "Up":
      case "ArrowUp":
        y -= 10;
        break;
      case "Down":
      case "ArrowDown":
        y += 10;
        break;
      case "Left":
      case "ArrowLeft":
        x -= 10;
        break;
      case "Right":
      case "ArrowRight":
        x += 10;
        break;
    }

    this.checkEatFood(this.snake.x, this.snake.y);

    // modify snake pos
    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (error) {
      alert(error.message);
      this.alive = false;
    }

    this.alive &&
      setTimeout(this.run.bind(this), 500 - (this.scorePanel.level - 1) * 30);
  }

  // Check if the snake ate food

  checkEatFood(x: number, y: number): void {
    if (x === this.food.x && y === this.food.y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;

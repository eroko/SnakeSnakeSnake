// Define Snake Class
class Snake {
  head: HTMLElement;

  body: HTMLCollection;

  snakeElement: HTMLElement;

  constructor() {
    this.snakeElement = document.getElementById("snake");

    this.head = document.querySelector("#snake>div") as HTMLElement;

    this.body = this.snakeElement.getElementsByTagName("div")!;
  }

  get x() {
    return this.head.offsetLeft;
  }

  get y() {
    return this.head.offsetTop;
  }

  // set Snake head pos
  set x(value: number) {
    if (this.x === value) return;
    if (value < 0 || value > 290) {
      throw new Error("You Are Dead!");
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      if (value > this.x) {
        value = this.x - 10;
      } else {
        value = this.x + 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
    this.checkBodyCrash();
  }
  set y(value: number) {
    if (this.y === value) return;
    if (value < 0 || value > 290) {
      throw new Error("You Are Dead!");
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      if (value > this.y) {
        value = this.y - 10;
      } else {
        value = this.y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkBodyCrash();
  }

  // add snake body
  addBody() {
    this.snakeElement.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // Move body
  moveBody() {
    /*
     *将后边的身体设置为前边身体的位置
     */

    for (let index = this.body.length - 1; index > 0; index--) {
      // Get body pos
      let x = (this.body[index - 1] as HTMLElement).offsetLeft;
      let y = (this.body[index - 1] as HTMLElement).offsetTop;

      // set pos to cur body
      (this.body[index] as HTMLElement).style.left = x + "px";
      (this.body[index] as HTMLElement).style.top = y + "px";
    }
  }

  checkBodyCrash() {
    for (let i = 1; i < this.body.length; i++) {
      if (
        this.x === (this.body[i] as HTMLElement).offsetLeft &&
        this.y === (this.body[i] as HTMLElement).offsetTop
      ) {
        throw new Error("You touch your body, You are DEAD!");
      }
    }
  }
}

export default Snake;

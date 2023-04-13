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
    this.head.style.left = value + "px";
  }
  set y(value: number) {
    this.head.style.top = value + "px";
  }

  // add snake body
  addBody() {
    this.snakeElement.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;

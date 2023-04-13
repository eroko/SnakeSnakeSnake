class Food {
  // 定义元素所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面内的food元素，赋值给element
    this.element = document.getElementById("food")!;
  }

  // get food position
  get x() {
    return this.element.offsetLeft;
  }

  get y() {
    return this.element.offsetTop;
  }

  // change food position
  // 0~290
  // snake move 10px per step, food pos%10=0

  change() {
    this.element.style.left = Math.round(Math.random() * 29) * 10 + "px";
    this.element.style.top = Math.round(Math.random() * 29) * 10 + "px";
  }
}

export default Food;

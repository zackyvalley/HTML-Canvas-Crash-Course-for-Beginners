export default class Letters {
  constructor(x, y) {

    const randRange = (min, max) => Math.random() * (max - min) + min;

    this.x = x;
    this.y = y;
    this.alpha = 1;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;

    this.chara = new Image();
    this.chara.src = "assets/img/letter.svg";  // 画像のURLを指定
    //this.chara.src = "http://placekitten.com/200/200";

    this.chara.onload = () => {
      this.width = this.chara.width;
      this.height = this.chara.height;
    };

  }
  update() {
    this.x += this.speedX * 30;
    this.y += this.speedY * 30;
  }
  draw(targetCtx) {
    targetCtx.drawImage(this.chara, this.x - this.chara.width / 2 , this.y - this.chara.height / 2);
  }

}

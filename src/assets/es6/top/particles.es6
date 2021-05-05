export default class Particles {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = 'hsl(' + this.hue + ', 100%, 50%)';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) this.size -= 0.1;
  }
  draw(targetCtx) {
    targetCtx.fillStyle = this.color;
    targetCtx.beginPath();
    targetCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    targetCtx.fill();
  }
}

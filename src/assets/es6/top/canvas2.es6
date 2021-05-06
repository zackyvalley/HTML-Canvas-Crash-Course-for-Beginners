import Letters from './letters';
import LetterHandler from './letterHandler.es6';

export default class Canvas2 {
  constructor () {
    this.init();
  }
  init() {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hue = 0;
    const lettersHandler = new LetterHandler();
    const lettersArray = [];

    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    console.log(ctx);

    const mouse = {
      x: undefined,
      y: undefined
    }

    canvas.addEventListener('click', function(event) {
      lettersArray.splice(0);
      ctx.globalAlpha = 1;
      mouse.x = event.x;
      mouse.y = event.y;
      console.log(event);
      for(let i = 0; i < 50; i++) {
        lettersArray.push(new Letters(mouse.x, mouse.y, hue));
      }
    });
    function animate(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      lettersHandler.update(ctx, lettersArray);
      requestAnimationFrame(animate);
    }
    animate();
  }
}

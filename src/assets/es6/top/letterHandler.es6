export default class LetterHandler {
  constructor() {
  }

  update(ctx, letters) {
    for(let i = 0; i < letters.length; i++) {
      letters[i].update();
      letters[i].draw(ctx);
      ctx.globalAlpha -= 0.001;
      if( letters[i].x + letters[i].width / 2 < 0 || 
          letters[i].y + letters[i].height / 2 < 0 || 
          letters[i].x > ctx.canvas.width  + letters[i].width / 2 || 
          letters[i].y > ctx.canvas.height + letters[i].height / 2 ) {

        // console.log(letters[i].x)
        letters.splice(i, 1);
        // console.log(letters.length);
        i--;
      }
    }
  }

}

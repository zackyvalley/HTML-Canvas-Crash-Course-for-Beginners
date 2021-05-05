import Particles from './particles';
import ParticlesHandler from './particlesHandler.es6';

export default class Canvas1 {
  constructor () {
    this.init();
  }
  init() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let hue = 0;
    const particlesHandler = new ParticlesHandler();
    const particlesArray = [];

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
      mouse.x = event.x;
      mouse.y = event.y;
      console.log(event);
      // drawCircle();
      for(let i = 0; i < 10; i++) {
        particlesArray.push(new Particles(mouse.x, mouse.y, hue));
      }
    });

    canvas.addEventListener('mousemove', function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
      for(let i = 0; i < 5; i++) {
        particlesArray.push(new Particles(mouse.x, mouse.y, hue));
      }
    })

    function animate(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      // ctx.fillStyle = 'rgba(0,0,0,0.02)';
      // ctx.fillRect(0,0, canvas.width, canvas.height);
      particlesHandler.update(ctx, particlesArray);
      requestAnimationFrame(animate);
      hue+=5;
    }
    animate();

  }
}

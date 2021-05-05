export default class ParticlesHandler {
  constructor() {
  }

  update(ctx, particles) {
    for(let i =0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);
      for(let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke();
          ctx.closePath();
        }
      }
      if(particles[i].size <= 0.2) {
        particles.splice(i, 1);
        console.log(particles.length);
        i--;
      }
    }
  }

}

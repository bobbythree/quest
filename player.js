const ctx = canvas.getContext('2d');

export const player = {  
    x: 100,
    y: 380,
    w: 20,
    h: 20,
    vx: 2,
    vy: 2,
    leftPressed: false,
    rightPressed: false,
    upPressed: false,
    downPressed: false,
    inventory: []
}

export function drawPlayer() {  
  ctx.fillStyle = 'hsl(300, 30%, 60%)';
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
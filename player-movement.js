import { player } from './player.js'

//arrow key controls
export function keyDown(e) {
  switch(e.key) {
    case 'ArrowLeft':
      player.leftPressed = true;
      break;
    case 'ArrowRight':
      player.rightPressed = true;
      break;
    case 'ArrowUp':
      player.upPressed = true;
      break;
    case 'ArrowDown':
      player.downPressed = true;
      break;
  }
}

export function keyUp(e) {
  switch(e.key) {
    case 'ArrowLeft':
      player.leftPressed = false;
      break;
    case 'ArrowRight':
      player.rightPressed = false;
      break;
    case 'ArrowUp':
      player.upPressed = false;
      break;
    case 'ArrowDown':
      player.downPressed = false;
      break;
  }
}

export function movePlayer() {  
  if (player.leftPressed == true) player.x -= player.vx;
  if (player.rightPressed == true) player.x += player.vx;
  if (player.upPressed == true) player.y -= player.vy;
  if (player.downPressed == true) player.y += player.vy;
  
  //prevent from sticking to walls
  if (player.x <= canvas.width - 600) player.x = canvas.width - 600;
  if (player.x >= canvas.width - player.w) player.x = canvas.width - player.w;
  if (player.y <= canvas.height - 400) player.y = canvas.height - 400;
  if (player.y >= canvas.height - player.w) player.y = canvas.height - player.h;  
}

import { player } from './game-objects.js'

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
}
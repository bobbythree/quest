import { gameObjects } from './game-objects.js'

//arrow key controls
export function keyDown(e) {
  switch(e.key) {
    case 'ArrowLeft':
      gameObjects.player.leftPressed = true;
      break;
    case 'ArrowRight':
      gameObjects.player.rightPressed = true;
      break;
    case 'ArrowUp':
      gameObjects.player.upPressed = true;
      break;
    case 'ArrowDown':
      gameObjects.player.downPressed = true;
      break;
  }
}

export function keyUp(e) {
  switch(e.key) {
    case 'ArrowLeft':
      gameObjects.player.leftPressed = false;
      break;
    case 'ArrowRight':
      gameObjects.player.rightPressed = false;
      break;
    case 'ArrowUp':
      gameObjects.player.upPressed = false;
      break;
    case 'ArrowDown':
      gameObjects.player.downPressed = false;
      break;
  }
}

export function movePlayer() {  
  if (gameObjects.player.leftPressed == true) gameObjects.player.x -= gameObjects.player.vx;
  if (gameObjects.player.rightPressed == true) gameObjects.player.x += gameObjects.player.vx;
  if (gameObjects.player.upPressed == true) gameObjects.player.y -= gameObjects.player.vy;
  if (gameObjects.player.downPressed == true) gameObjects.player.y += gameObjects.player.vy;  
}
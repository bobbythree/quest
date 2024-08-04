import { player } from './game-objects/player.js';

//html elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

// init Canvas
const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext('2d');

//player
function drawPlayer() {
  ctx.fillStyle = 'hsl(300, 30%, 60%)';
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

function movePlayer() {  
  if (player.leftPressed == true) player.x -= player.vx;
  if (player.rightPressed == true) player.x += player.vx;
  if (player.upPressed == true) player.y -= player.vy;
  if (player.downPressed == true) player.y += player.vy;  
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawPlayer();
  movePlayer();
  drawTrees();
  if (player.x <= canvas.width - 600) player.x = canvas.width - 600;
  if (player.x >= canvas.width - player.w) player.x = canvas.width - player.w;
  if (player.y <= canvas.height - 400) player.y = canvas.height - 400;
  if (player.y >= canvas.height - player.w) player.y = canvas.height - player.h;

  requestAnimationFrame(animate)
}
animate();

//tree
function drawTrees() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(500, 400);
  ctx.lineTo(490, 350);
  ctx.lineTo(480, 400);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(480, 400);
  ctx.lineTo(470, 350);
  ctx.lineTo(460, 400);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(460, 400);
  ctx.lineTo(450, 350);
  ctx.lineTo(440, 400);
  ctx.closePath();
  ctx.fill();
}


//event listeners
function keyDown(e) {
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

function keyUp(e) {
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

//keyboard events
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

//text input
form.onsubmit = (e) => {
  e.preventDefault();  
  console.log(input.value);
}
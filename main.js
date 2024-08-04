
import {player, rock, tree} from './game-objects.js'
import { verbs } from './game-commands/verbs.js';
import { nouns, nounAttributes } from './game-commands/nouns.js';

//html elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

// init Canvas
const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext('2d');

//game loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawPlayer();
  movePlayer();
  drawTree();
  drawRock();
  if (player.x <= canvas.width - 600) player.x = canvas.width - 600;
  if (player.x >= canvas.width - player.w) player.x = canvas.width - player.w;
  if (player.y <= canvas.height - 400) player.y = canvas.height - 400;
  if (player.y >= canvas.height - player.w) player.y = canvas.height - player.h;

  requestAnimationFrame(animate)
}
animate();

//draw player
player
function drawPlayer() {
  ctx.fillStyle = 'hsl(300, 30%, 60%)';
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

//draw trees
function drawTree() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(tree.startX, tree.startY);
  ctx.lineTo(tree.nextX, tree.nextY);
  ctx.lineTo(tree.lastX, tree.lastY);
  ctx.closePath();
  ctx.fill();  
}

//draw rock
function drawRock() {
  ctx.fillStyle = 'slategray';
  ctx.beginPath();
  ctx.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2)
  ctx.fill();
}

//arrow key controls
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

function movePlayer() {  
  if (player.leftPressed == true) player.x -= player.vx;
  if (player.rightPressed == true) player.x += player.vx;
  if (player.upPressed == true) player.y -= player.vy;
  if (player.downPressed == true) player.y += player.vy;  
}

//event listeners
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

//text input
form.onsubmit = (e) => {
  e.preventDefault();  
  handleTextInput(input.value);
  input.value = '';
}

function handleTextInput(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  if (verbs.includes(tokens[0]) && nouns.includes(tokens[1])) {
    runCommand(tokens[0], tokens[1]);
  } else {
    console.log('I don\'t understand');    
  }
}

function runCommand(verb, noun) {
  switch(verb) {
    case 'look':
      console.log(nounAttributes[noun].description);
      break;
  }  
}
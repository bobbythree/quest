import { keyDown, keyUp, movePlayer } from './player-movement.js';
import {gameObjects} from './game-objects.js';
import { verbs } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js';

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
  drawRock();
  drawPlayer();
  drawTree();
  movePlayer();
  if (gameObjects.player.x <= canvas.width - 600) player.x = canvas.width - 600;
  if (gameObjects.player.x >= canvas.width - gameObjects.player.w) player.x = canvas.width - player.w;
  if (gameObjects.player.y <= canvas.height - 400) gameObjects.player.y = canvas.height - 400;
  if (gameObjects.player.y >= canvas.height - gameObjects.player.w) gameObjects.player.y = canvas.height - gameObjects.player.h;

  requestAnimationFrame(animate)
}
animate();

//draw player
function drawPlayer() {
  ctx.fillStyle = 'hsl(300, 30%, 60%)';
  ctx.fillRect(gameObjects.player.x, gameObjects.player.y, gameObjects.player.w, gameObjects.player.h);
}

//draw tree
function drawTree() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(gameObjects.tree.startX, gameObjects.tree.startY);
  ctx.lineTo(gameObjects.tree.nextX, gameObjects.tree.nextY);
  ctx.lineTo(gameObjects.tree.lastX, gameObjects.tree.lastY);
  ctx.closePath();
  ctx.fill();  
}

//draw rock
function drawRock() {
  ctx.fillStyle = 'slategray';
  ctx.beginPath();
  ctx.arc(gameObjects.rock.x, gameObjects.rock.y, gameObjects.rock.r, 0, Math.PI * 2)
  ctx.fill();
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
  const currentNoun = gameObjects[noun];
  const distance = Math.hypot(currentNoun.x - gameObjects.player.x, currentNoun.y - gameObjects.player.y);
  if (verb === 'look') {
    console.log(gameObjects[noun].description);
  } 
  
  if (verb === 'get' && gameObjects[noun].canGet) {
    if (distance < 50) {
      console.log('ok');
      gameObjects.rock.x = -100;
      gameObjects.player.inventory.push(noun);
      console.log(gameObjects.player.inventory);
      
    } else {
      console.log('get closer');
      console.log(distance);
      
    }
         
  } else if (verb === 'get' && !nounAttributes[noun].canGet) {
    console.log('you can\'t get that');
    
  }    
}
import { keyDown, keyUp, movePlayer } from './player-movement.js';
import {gameObjects} from './game-objects.js';
import { verbs } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js';
import { prepositions } from './game-commands/prepositions.js';

//html elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

//game objects
const player = gameObjects.player;
const tree = gameObjects.tree;
const rock = gameObjects.rock;

// init Canvas
const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext('2d');

//game loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawPlayer();
  drawTree();
  drawRock();
  movePlayer();
  if (player.x <= canvas.width - 600) player.x = canvas.width - 600;
  if (player.x >= canvas.width - player.w) player.x = canvas.width - player.w;
  if (player.y <= canvas.height - 400) player.y = canvas.height - 400;
  if (player.y >= canvas.height - player.w) player.y = canvas.height - player.h;

  requestAnimationFrame(animate)
}
animate();

//draw player
function drawPlayer() {
  ctx.fillStyle = 'hsl(300, 30%, 60%)';
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

//draw tree
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
  if (verbs.includes(tokens[0] && !tokens[1] && !tokens[2])&& !tokens[3]) {
    runCommand(tokens[0]);    
  } else if (verbs.includes(tokens[0]) && nouns.includes(tokens[1]) && !tokens[2] && !tokens[3]) {
    runCommand(tokens[0], tokens[1]);
  } else if (verbs.includes(tokens[0]) && nouns.includes(tokens[1]) && prepositions.includes(tokens[2]) && nouns.includes(tokens[3])) {       
    runCommand(tokens[0], tokens[1], tokens[2], tokens[3]);    
  } else {
    console.log('I don\'t understand');
  }
}

function runCommand(verb, noun, preposition, directObject) {
  const currentNoun = gameObjects[noun];
  const distance = Math.hypot(currentNoun.x - player.x, currentNoun.y - player.y);
  if (verb === 'look') {   
      console.log(currentNoun.description);    
  } 
  
  if (verb === 'get' && currentNoun.canGet) {
    if (distance < 50) {
      console.log('ok');
      currentNoun.x = -100;
      player.inventory.push(noun);
      console.log(player.inventory);      
    } else {
      console.log('get closer');
      console.log(distance);      
    }         
  } else if (verb === 'get' && !currentNoun.canGet) {
    console.log('you can\'t get that');    
  }
  
  const item = player.inventory.indexOf(noun) 
  if (verb === 'drop' && player.inventory.includes(noun)) {
    player.inventory.splice(item, 1);
    console.log('ok');
    currentNoun.x = player.x + 25;
    console.log(player.inventory);    
  } else if (verb === 'drop' && !player.inventory.includes(noun)) {
    console.log(`you do not have a ${noun}`);    
  }

  if (verb === 'throw' && player.inventory.includes(noun)) {
    console.log(`you ${verb} the ${noun} ${preposition} the ${directObject}`)
    if (directObject === 'tree') {
      rock.x = 490;
      rock.y = 360;
    } 
  } else if (verb === 'throw' && !player.inventory.includes(noun)) {
    console.log(`you do not have a ${noun}!`);    
  }
}



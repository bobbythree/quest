import { keyDown, keyUp, movePlayer } from './player-movement.js';
import {gameObjects} from './game-objects.js';
import { verbs } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js';
import { prepositions } from './game-commands/prepositions.js';

//html elements
const textDisplay = document.getElementById('text-display');
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
  
  if (verbs.includes(tokens[0]) && !tokens[1]) {
    runOneWordCommand(tokens[0]);
  } else if (verbs.includes(tokens[0]) && nouns.includes(tokens[1]) && !tokens[2] && !tokens[3]) {
    runCommand(tokens[0], tokens[1]);
  } else if (verbs.includes(tokens[0]) && nouns.includes(tokens[1]) && prepositions.includes(tokens[2]) && nouns.includes(tokens[3])) {       
    runCommand(tokens[0], tokens[1], tokens[2], tokens[3]);    
  } else {
    displayText('I don\'t understand')
  }
  
}

function runCommand(verb, noun, preposition, indirectObject) {
  const currentNoun = gameObjects[noun];  
  if (verb === 'look' && nouns.includes(noun)) {
    displayText(currentNoun.description);
  }  
  
  if (verb === 'get' && currentNoun.canGet) {
    get(noun);          
  } else if (verb === 'get' && !currentNoun.canGet) {
    displayText('you can\'t get that');    
  }  
  
  if (verb === 'drop' && player.inventory.includes(noun)) {
    drop(noun);       
  } else if (verb === 'drop' && !player.inventory.includes(noun)) {
    displayText(`you don\'t have a ${noun}`);
  }

  if (verb === 'throw' && player.inventory.includes(noun) && preposition === undefined && indirectObject === undefined) {
    displayText(`${verb} ${noun} at what??`);
  } else if (verb === 'throw' && player.inventory.includes(noun)) {
    throwObject(verb, noun, preposition, indirectObject);
  } else if (verb === 'throw' && !player.inventory.includes(noun)) {
    displayText(`you don\'t have a ${noun}`);   
  }  
}

//funcs
function displayText(str) {
  textDisplay.innerHTML = str;
  setTimeout(() => {
    textDisplay.style.display = 'none'
  }, 3000);
  textDisplay.style.display = 'block';  
}

function runOneWordCommand(verb) {
  switch(verb) {
    case 'look':
      displayText('You are in a clearing. You see a rock on the ground. To the east stands a lone tree.');
      break;
    case 'inventory':
      displayText(`INVENTORY: ${player.inventory}`);
      break;
  }
}

function get(noun) {
  const currentNoun = gameObjects[noun];
  const distance = Math.hypot(currentNoun.x - player.x, currentNoun.y - player.y);

  if (distance < 50) {
      displayText('ok');
      currentNoun.x = -100;
      player.inventory.push(noun);
      console.log(player.inventory);      
    } else {
      displayText('get closer');
      console.log(distance);      
    }         
}

function drop(noun) {
  const currentNoun = gameObjects[noun];
  const item = player.inventory.indexOf(noun); 
  player.inventory.splice(item, 1);
  displayText('ok');
  currentNoun.x = player.x + 25;  
  console.log(player.inventory); 
}

function throwObject(verb, noun, preposition, indirectObject) {
  const item = player.inventory.indexOf(noun);
  displayText(`you ${verb} the ${noun} ${preposition} the ${indirectObject}`);   
  if (indirectObject === 'tree') {    
    player.inventory.splice(item, 1);
    console.log(player.inventory);          
    rock.x = 490;
    rock.y = 395;
  } else if (indirectObject === 'sky') {    
    player.inventory.splice(item, 1);
    console.log(player.inventory);
    rock.x = - 100;
    setTimeout(() => {
      rock.x = 400
    }, 4000);
  } else {
    displayText('why tho?')
  }
}
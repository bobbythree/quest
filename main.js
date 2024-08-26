import { keyDown, keyUp, movePlayer } from './player-movement.js';
import { drawPlayer } from './player.js';
import { renderTestScene } from './scenes/testScene.js'
import { parseText } from './parser.js';
import { scenes } from './sceneRenders.js';

//html elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

// init Canvas
const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext('2d');

//init game
window.onload = () => {
  gameLoop('test')
}

//game loop
function gameLoop(scene) {  
  ctx.clearRect(0, 0, canvas.width, canvas.height);   
  drawPlayer();
  movePlayer();
  renderScene(scene);
  requestAnimationFrame(() => gameLoop);
}


function renderScene(scene) {
  scenes[scene].render();
}

//event listeners
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

//text input
form.onsubmit = (e) => {
  e.preventDefault();  
  parseText(input.value);
  input.value = '';
}

// function get(noun) {
//   const currentNoun = gameObjects[noun];
//   const distance = Math.hypot(currentNoun.x - player.x, currentNoun.y - player.y);

//   if (distance < 50) {
//       displayText('ok');
//       currentNoun.x = -100;
//       player.inventory.push(noun);
//       console.log(player.inventory);      
//     } else {
//       displayText('get closer');
//       console.log(distance);      
//     }         
// }

// function drop(noun) {
//   const currentNoun = gameObjects[noun];
//   const item = player.inventory.indexOf(noun); 
//   player.inventory.splice(item, 1);
//   displayText('ok');
//   currentNoun.x = player.x + 25;  
//   console.log(player.inventory); 
// }

// function throwObject(verb, noun, preposition, indirectObject) {
//   const currentNoun = gameObjects[noun];
//   const item = player.inventory.indexOf(noun);
//   displayText(`you ${verb} the ${noun} ${preposition} the ${indirectObject}`);   
//   if (indirectObject === 'tree') {    
//     player.inventory.splice(item, 1);
//     console.log(player.inventory);          
//     currentNoun.x = tree.startX - (tree.startX - tree.lastX);
//     currentNoun.y = 395;
//   } else if (indirectObject === 'sky') {    
//     player.inventory.splice(item, 1);
//     console.log(player.inventory);
//     rock.x = - 100;
//     setTimeout(() => {
//       rock.x = 400
//     }, 4000);
//   } else {
//     displayText('why tho?');
//   }
// }

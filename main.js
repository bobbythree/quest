import { keyDown, keyUp, movePlayer } from './player-movement.js';
import { player, drawPlayer } from './player.js';
import { verbs } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js';
import { prepositions } from './game-commands/prepositions.js';
import { testSceneObjects, renderTestScene } from './scenes/testScene.js'
import { parseText } from './parser.js';


//html elements
const textDisplay = document.getElementById('text-display');
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  drawPlayer();
  movePlayer(); 
  renderScene();
  requestAnimationFrame(animate)
}
animate();

function renderScene() {
  renderTestScene();  
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



//helper funcs
function displayText(str) {
  textDisplay.innerHTML = str;
  setTimeout(() => {
    textDisplay.style.display = 'none'
  }, 3000);
  textDisplay.style.display = 'block';  
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
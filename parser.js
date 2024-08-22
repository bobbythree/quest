import { verbs, describe, get, drop } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js'
import { prepositions } from './game-commands/prepositions.js'
import { testSceneObjects } from './scenes/testScene.js';

// html elements
const textDisplay = document.getElementById('text-display');

export function parseText(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  const commandArr = [];
  
  //loop over text input anf identify verbs, nouns, prepositions
  for (let i = 0; i < tokens.length; i++) {
    for (const verb in verbs) {
      if (tokens[i].includes(verb)) {
        commandArr.push(verb);
      }
    }
    for (const noun in nouns) {
      if (tokens[i].includes(noun)) {
        commandArr.push(noun);
      }
    }    
    if (prepositions.includes(tokens[i])) {
      commandArr.push(tokens[i]);
    }
  }

  //get rid of dupes
  let noDupesCommandArr = [];
  commandArr.forEach((e) => {
    if (!noDupesCommandArr.includes(e)) {
      noDupesCommandArr.push(e)
    }
  });
  runCommand(noDupesCommandArr);
}

function runCommand(input) { 
   verbs[input[0]].action(input[1]) 
}
  




//helper funcs
export function displayText(str) {
  textDisplay.innerHTML = str;
  setTimeout(() => {
    textDisplay.style.display = 'none'
  }, 3000);
  textDisplay.style.display = 'block';  
}

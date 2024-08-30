import { verbs, describe, get, drop } from './game-commands/verbs.js';
import { nouns } from './game-commands/nouns.js'
import { prepositions } from './game-commands/prepositions.js'
import { testSceneObjects } from './scenes/testSceneBuild.js';
import { scenes } from './sceneRenders.js';

// html elements
const textDisplay = document.getElementById('text-display');

export function parseText(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  const commandArr = [];
  
  //loop over text input. identify verbs, nouns, prepositions
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
    } else displayText('huh?')
  }

  //get rid of dupes
  let noDupesCommandArr = [];
  commandArr.forEach((e) => {
    if (!noDupesCommandArr.includes(e)) {
      noDupesCommandArr.push(e);
    }
  });
  runCommand(noDupesCommandArr);
}

//run commands
function runCommand(input) {
  const verbsArr = Object.keys(verbs);
  const nounsArr = Object.keys(nouns);
  if (verbsArr.includes(input[0]) && !input[1]) {
    displayText(`${input[0]} what?`);
  } else if (verbsArr.includes(input[0]) && nounsArr.includes(input[1])) {
    verbs[input[0]].action(input[1]);
  } 
}

//helper funcs
export function displayText(str) {
  textDisplay.innerHTML = str;
  setTimeout(() => {
    textDisplay.style.display = 'none'
  }, 3000);
  textDisplay.style.display = 'block';  
}

import { verbs } from './game-commands/verbs.js'
import { nouns } from './game-commands/nouns.js'
import { prepositions } from './game-commands/prepositions.js'
import { testSceneObjects } from './scenes/testScene.js';

export function parseText(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  const commandArr = [];
  
  //loop over text input anf identify verbs, nouns, prepositions
  for (let i = 0; i < tokens.length; i++) {
    if (verbs.includes(tokens[i])) {
      commandArr.push(tokens[i]);
    }
    if (nouns.includes(tokens[i])) {
      commandArr.push(tokens[i]);
    }
    if (prepositions.includes(tokens[i])) {
      commandArr.push(tokens[i]);
    }
  }

  //get rid of dupes
  let noDupesArr = [];
  commandArr.forEach((e) => {
    if (!noDupesArr.includes(e)) {
      noDupesArr.push(e)
    }
  });
  createCommands(noDupesArr);
}

function createCommands(input) {   
  console.log(input);
  
}





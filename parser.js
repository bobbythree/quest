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
    for (const verb in verbs) {
      if (tokens[i].includes(verb)) {
        commandArr.push(verb);
      }
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





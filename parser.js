import { verbs } from './game-commands/verbs.js'
import { nouns } from './game-commands/nouns.js'
import { prepositions } from './game-commands/prepositions.js'

export function parseText(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  const parsedArr = [];
  
  for (let i = 0; i < tokens.length; i++) {
    if (verbs.includes(tokens[i])) {
      parsedArr.push(tokens[i]);
    }
    if (nouns.includes(tokens[i])) {
      parsedArr.push(tokens[i]);
    }
    if (prepositions.includes(tokens[i])) {
      parsedArr.push(tokens[i]);
    }
  }  
  console.log(parsedArr);
  
}
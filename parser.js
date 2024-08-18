import { verbs } from './game-commands/verbs.js'
import { nouns } from './game-commands/nouns.js'
import { prepositions } from './game-commands/prepositions.js'



export function parseText(str) {
  const textInput = str.toLowerCase();
  const tokens = textInput.split(' ');
  const parsedArr = [];
  
  //loop over text input anf identify verbs, nouns, prepositions
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

  //get rid of dupes
  let noDupesArr = [];
  parsedArr.forEach((e) => {
    if (!noDupesArr.includes(e)) {
      noDupesArr.push(e)
    }
  });
  createCommands(noDupesArr);
}

function createCommands(input) { 
  if (input[0] !== 'throw' && input[0] !== 'give' && input[0] !== 'use') {
    if (verbs.includes(input[0]) && !input[1]) {
      console.log(`${input[0]}...?`);        
    } else if (verbs.includes(input[0]) && nouns.includes(input[1])) {
      runCommand();    
    } else (console.log('error'));   
      
  } else {
    if (prepositions.includes(input[2]) && nouns.includes(input[3])) {
      console.log(`you ${input[0]} the ${input[1]} ${input[2]} the ${input[3]}`);    
    } else if (!input[1]) {
      console.log(`${input[0]}...?`);
    } else if (!input[2]) {
      console.log(`${input[0]} ${input[1]}....?`);      
    }
  }
  
  
}

function runCommand() {
  console.log('success');
  
}
console.log(verbs.throw);



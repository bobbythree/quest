import { nouns } from "./nouns";
import { displayText } from "../parser.js";
import { testSceneObjects } from "../scenes/testScene.js";
import { player } from "../player.js";


export const verbs = {
  look: {
    action: describe
  },
  get: {
    action: get
  },
  drop: {
    action: drop
  }
};

//TODO get rid of hard-coded scene name and refactor
export function describe(noun) {
  displayText(nouns[noun].description);
}

export function get(noun) {
  const distance = Math.hypot(testSceneObjects[noun].x - player.x, testSceneObjects[noun].y - player.y);
  if (nouns[noun].canGet) {
    displayText(`you pick up the ${noun}`);
    testSceneObjects[noun].x = -100;
    player.inventory.push(noun);
    console.log(player.inventory);
    
  } else {
    displayText('you can\'t get that')
  }
}

export function drop(noun) {
  if (player.inventory.includes(noun)) {
    displayText(`you drop the ${noun}`);
    testSceneObjects[noun].x = player.x + 30;
    const item = player.inventory.indexOf(noun); 
    player.inventory.splice(item, 1);
    console.log(player.inventory);    
  } else {
    displayText(`you don\'t have a ${noun}!`)
  }  
}

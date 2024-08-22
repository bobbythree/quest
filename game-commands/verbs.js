import { nouns } from "./nouns";
import { displayText } from "../parser.js";


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

export function describe(noun) {
  displayText(nouns[noun].description);
}
export function get(noun) {
  displayText(`you pick up the ${noun}`);
  
}
export function drop(noun) {
  displayText(`you drop the ${noun}`);
}

import { nouns } from "./nouns";
import { displayText } from "../parser.js";


export const verbs = {
  look: {
    func: describe
  },
  get: {
    func: get
  },
  drop: {
    func: drop
  }
};

export function describe(noun) {
  displayText(nouns[noun].description)
}
export function get() {
  
}
export function drop() {

}

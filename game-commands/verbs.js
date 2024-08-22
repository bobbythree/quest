import { nouns } from "./nouns";

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

function describe(noun) {
  console.log(nouns[noun].description)
}
function get() {

}
function drop() {

}


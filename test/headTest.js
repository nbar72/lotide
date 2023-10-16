// const assertEqual = require('../assertEqual');

const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it ("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it ("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});


// TEST CASES 
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([10]), 10);
// assertEqual(head([]), undefined);


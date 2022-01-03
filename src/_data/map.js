const map = new Map([
  ["one", ["a", "b", "c"]],
  ["two", ["x", "y", "z"]]
]);
module.exports = map;

// Convert the Map() to an Object.
// { "one":["a","b","c"], "two":["x","y","z"] }
// module.exports = Object.fromEntries(map);

// npm -- global command, comes with node.
// npm --version (Mine is 11.17.0)

// local dependency - use it only in tis particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// There are 3 ways to create package.json:
// i.  manual approach (create package.json in the root, create properties etc)
// ii. npm init (step by step, press enter to skip)
// iii.npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
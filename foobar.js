const fs = require('fs');

let rules = [
  {
    condition: num => num % 2 == 0,
    result: "foo"
  },
  {
    condition: num => num % 7 == 0,
    result: "bar"
  },
  {
    condition: num => true,
    result: ''
  }
];

function applyRules(num) {
    return rules.filter(rule => rule.condition(num)).map(rule => rule.result).reduce((state, newNumber) => state + newNumber);
}

fs.readFile("test1.txt", { encoding: "utf-8", flag: "r" }, (err, data) => {

    if (err) throw err;

    numbers = data.split(';').map(Number).forEach(num => console.log(applyRules(num)));

    // console.log(numbers);
});

module.exports = applyRules;
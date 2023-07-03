const addTwoTimes = require('./main.js')

const runTest = (input, expected) => {
  const actual = target(input);
  if (actual !== expected) {
    throw new Error(`Test failed! expected: ${expected}, actual: ${actual}`);
  }
}

runTest('apple', 'りんごは赤い');
runTest('banana', 'バナナは黄色い');
runTest('orange', 'オレンジはオレンジ色');
runTest('melon', 'そのフルーツはわかりません...');
console.log('Test OK!');


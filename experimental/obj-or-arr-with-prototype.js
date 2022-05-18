const bob = ['bob'];
const anna = {
  ann: 'Anna',
};

const guess1 = Object.prototype.toString.call(bob);
const guess2 = Object.prototype.toString.call(anna);
const guess3 = Object.prototype.toString.call(5);
const guess4 = Object.prototype.toString.call('');
console.log(guess1, guess2, guess3, guess4);

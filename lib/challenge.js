'use strict';

const testPalindrome = function(num) {
    return num === parseInt(num.toString().split('').reverse().join(''), 10);
};

const toBin = function(num) {
  return parseInt(parseInt(num, 10).toString(2), 10);
};

const sumPalindromes = function() {
  let sum = 0;
  for (var i = 0; i <= 1000000; i++) {
    let b = toBin(i);
    if(testPalindrome(i) && testPalindrome(b)) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
};

sumPalindromes();


module.exports = () => {
  return true;
};

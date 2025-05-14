nums = [1,2,23,3,4];

const value = nums.reduce((acc , currValue) => acc > curr ? acc : curr);
console.log(value);
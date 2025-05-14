const nums = [10, 45, 2, 99, 23];

const minvalue = nums.reduce((acc , curr )=> acc < curr ? acc : curr);

console.log(minvalue);



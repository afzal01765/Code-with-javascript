arr =  [2,2,3,34,4,5,5,433,3,4,4,4,5,5,56,6] ;
const arraySum = (arr) => arr.reduce((sum , num)=>sum + num , 0);
console.log(arraySum(arr));

const items = [

  { name: 'pen', price: 10 },
  { name: 'book', price: 40 },
  { name: 'pencil', price: 5 }
  
];

const total = items.reduce((acc , item) => acc + item.price , 0);
console.log(total);

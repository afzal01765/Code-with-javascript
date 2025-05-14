function sum (a,b){  // This is actullay normal function .

    return a + b;

}

sumwitharrow = (a,b)=>{ // This is actullay arrow function .

    return a + b ;
}

sumwitharrow2 = (a,b)=>a+b; // without return keyword.

let hello =()=>"Hello World";  //defult 

let Hello = ()=>"Hello world"


console.log(sumwitharrow(23,12));

console.log(sum(23,12));

console.log(sumwitharrow2(12,33));

console.log(hello());

Hello();


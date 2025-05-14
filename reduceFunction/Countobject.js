const fruits = ['apple','banna','apple','orange','banana'];

const count = fruits.reduce((acc, fruit)=>{
    acc[fruit] = (acc[fruit] || 0) + 1 ;

    return acc ; 
    
} , {} )
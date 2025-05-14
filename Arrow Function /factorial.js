const fectorial =(n)=>{

    let fectorial = 1 ;
    for(let i = 1 ; i<=n;i++){
        fectorial = fectorial * i ; 
    }
    return fectorial ; 

}
console.log(fectorial(5));
try{
    console.log(isDivisible(1, 2));
    console.log(isDivisible(2, 2));
    console.log(isDivisible(3, 2));
    console.log(isDivisible(30, 15));
    console.log(isDivisible(42, 3));
    console.log(isDivisible(9990, 20));

    //console.log(isDivisible(1, 0)); // func(isDivisible): second param must be non-zero
    //console.log(isDivisible("20", "20")); // func (isDivisible): params must be an integer
    //console.log(isDivisible("sdf", 10)); // func (isDivisible): params must be an integer


}catch(err){
    console.log(err.message);
}

function isDivisible(numb1, numb2){
    if(!Number.isInteger(numb1) || !Number.isInteger(numb2))
        throw new TypeError("func (isDivisible): params must be an integer");

    if(numb2 === 0)
        throw new TypeError("func(isDivisible): second param must be non-zero");

    return numb1 % numb2 === 0;
}
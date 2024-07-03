
try{
    let numberArray = [23, 41, 123, 56, 234, 6, 56, 876, -20]

    console.log("Min value - " + GetMinValue(numberArray))
    console.log("Min value - " + GetMinValue([1,1,1,1,1]))
    //console.log("Min value - " + GetMinValue([1 , 2, 334, "as", 23])) // func(GetMinValue): elements of param array must be an integer
    //console.log("Min value - " + GetMinValue([])) // func(GetMinValue): param array cannot be empty

}catch(err){
    console.log(err.message)
}

function GetMinValue(arr){

    if(!Array.isArray(arr))
        throw new TypeError("func(GetMinValue): param must be an array")

    if(arr.length === 0)
        throw new TypeError("func(GetMinValue): param array cannot be empty")

    let minValue = Infinity;

    arr.forEach(value =>{
        if(!Number.isInteger(value))
            throw new TypeError("func(GetMinValue): elements of param array must be an integer")

        if(value < minValue) 
            minValue = value;
    })

    return minValue;
}

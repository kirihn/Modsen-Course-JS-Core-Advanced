function GetSquarePromise(number){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(typeof number !== 'number'){
                reject(new Error('func(GetSquarePromise): param must be a number'))
            }
            else{
                resolve(number * number)
            }
        }, 3000)
    })
}

let MyPromise = new Promise((resolve,reject) => {
    resolve(GetSquarePromise(2));
})

MyPromise.then(result => {
    return GetSquarePromise(result);
})
.then(result => {
    return GetSquarePromise(result);
})
.then(result => {
    console.log("result - " + result);
})
.catch(err => {
    console.log(err.message)
})
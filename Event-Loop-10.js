
GetPromise(2)
.then(result => console.log(result))
.catch(err => console.log(err.message))

GetPromise(3)
.then(result => console.log(result))
.catch(err => console.log(err.message))

GetPromise('d')
.then(result => console.log(result))
.catch(err => console.log(err.message))

function GetPromise(data){
    return new Promise((resolve, reject) => {
        
        if(typeof data !== 'number')
            reject(new Error("Error"))

        if(data % 2 === 0 ){
            setTimeout(() => {
                resolve('Even')
            }, 2000)
        }
        else{
            setTimeout(() => {
                resolve('odd')
            }, 1000)
        }
    })

}
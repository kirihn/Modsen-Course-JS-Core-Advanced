GetReferenceError();

function GetReferenceError(){
    try {
        console.log(NoParam)
    } catch (err) {
        if(err instanceof ReferenceError){
            console.log("func(GetReferenceError): " + err.message)
        }
    }
}
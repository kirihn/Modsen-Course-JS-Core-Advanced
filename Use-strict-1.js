'use strict'

try{
    console.log(GetWordArray('sdf asdfasdf werferfasd fasdf   sdfasdf asdf asdf   asdf '));
    console.log(GetWordArray(123));

}catch(err){
    console.log(err.message);
}

function GetWordArray(message){
    if(typeof message !== 'string')
        throw new TypeError("Func (GetWordArray): param must be a string");

    return message.split(' ').filter( word => word.length > 0);
}


try{
    console.log(FindFirstNonRepeatChar("aaaaavaaaasssssssz")) // v
    console.log(FindFirstNonRepeatChar("aaaa avaaaasssssssz")) // space -> <-
    console.log(FindFirstNonRepeatChar("qwerty")) // q
    console.log(FindFirstNonRepeatChar("qqqqq")) // null
    //console.log(FindFirstNonRepeatChar("")) // func(FindFirstNonRepeatChar): param cannot be epmty strin
    //console.log(FindFirstNonRepeatChar(123)) // func(FindFirstNonRepeatChar): param must be a string


}catch(err){
    console.log(err.message)
}


function FindFirstNonRepeatChar(str){
    if(typeof str !== 'string')
        throw new TypeError("func(FindFirstNonRepeatChar): param must be a string")

    if(str.length === 0)
        throw new TypeError("func(FindFirstNonRepeatChar): param cannot be an epmty string")

    let SymbolsMap = new Map();

    for(let symbol of str){
        if(SymbolsMap.has(symbol)){
            
            SymbolsMap.set(symbol, false);
        }
        else{
            SymbolsMap.set(symbol, true)
        }
    }

    for(let symbol of str){
        if(SymbolsMap.get(symbol) === true)
            return symbol;
    }

    return null;
}
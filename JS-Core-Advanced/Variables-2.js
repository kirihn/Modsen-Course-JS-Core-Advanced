try{
    for(let i = 0; i < 1; i++){
        var varField = 2;
        let letField = 1;
        const constField = 3;
    }
    
    console.log(varField); // 2
    //console.log(letField) //   ReferenceError: letField is not defined
    //console.log(constField) // ReferenceError: constField is not defined

}catch(err){
    console.log(err.message);
}
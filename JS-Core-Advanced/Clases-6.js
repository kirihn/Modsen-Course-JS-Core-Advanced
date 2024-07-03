
class University{

    constructor(universityName){
        if(typeof universityName !== 'string' || universityName.length === 0)
            throw new TypeError("Class 'University': universityName must be a non-empty string");
        
        this.Name = universityName;
        this.Faculties = [];
    }
    
    AddFaculti(facultiName){
        
        if (typeof facultiName !== 'string' || facultiName.trim() === '') 
            throw new TypeError("Class 'University -> AddFaculti': facultiName must be a non-empty string.");
        
        
        this.Faculties.forEach(el => {
            if (el === facultiName)
                throw TypeError("Class 'University -> AddFaculti': such faculti already exist");
        })

        this.Faculties.push(facultiName);
    }
    
    RemoveFaculti(facultiName){
        if (typeof facultiName !== 'string' || facultiName.trim() === '') 
            throw new TypeError("Class 'University -> RemoveFaculti': facultiName must be a non-empty string.");

        let facultiIndex = this.Faculties.indexOf(facultiName);
        
        if (facultiIndex === -1)
            throw new Error(`Class 'University': ${facultiName} does not exist.`);
        
        
        this.Faculties.splice(facultiIndex, 1);
    }
    
    PrintFaculties(){
        if(this.Faculties.length === 0){
            console.log(this.Name + " dosen't have any faculties");
        }else{
            this.Faculties.forEach(faculti => console.log(faculti));
        }
    }
    
}

try{

    let BSTU = new University("BSTU");

    BSTU.PrintFaculties(); // BSTU dosen't have any faculties
    //BSTU.RemoveFaculti("FIT") // Class 'University': FIT does not exist.

    BSTU.AddFaculti("FIT");
    BSTU.PrintFaculties(); // FIT
    BSTU.RemoveFaculti("FIT");
    BSTU.PrintFaculties(); // BSTU dosen't have any faculties

    BSTU.AddFaculti("FIT");
    BSTU.AddFaculti("PIM");
    BSTU.AddFaculti("TOV");
    BSTU.AddFaculti("LSX");
    BSTU.PrintFaculties(); // FIT PIM TOV LSX
    
    //BSTU.RemoveFaculti(); // Class 'University -> RemoveFaculti': facultiName must be a non-empty string.
    //BSTU.AddFaculti(123); // Class 'University -> AddFaculti': facultiName must be a non-empty string.
    //BSTU.AddFaculti(); // Class 'University -> AddFaculti': facultiName must be a non-empty string.




}catch(err){
    console.log(err.message);
}
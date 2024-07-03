GetResponse()

async function GetResponse() {
    try {
        //let url = "https://www.modsen-software.com/123"; //Fetch Error: 404 Not Found
        let url = "https://www.modsen-software.com/";

        let response = await FetchAndProcessData(url);
    
        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
}

async function FetchAndProcessData(url){
    const response = await fetch(url);

    if(response.ok){
        return response.text();
    }
    else{
        return "Fetch Error: " + response.status + " " + response.statusText
    }
}
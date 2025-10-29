function fetchdata(callback) {
    //fetch data using async function
    setTimeout(() => {
        const data = {"name": "John", "age":30};
        console.log("Data fetched");
        callback(data); // why can we use dataprocessed(data) here? becasue lets say we 
                        // want to use a difference function to callback if we hard code the processing its diffcult to resue
    }, 2000);
}
    function dataprocessed(data){
        console.log("processing", data);
    }
    fetchdata(dataprocessed);

 
    

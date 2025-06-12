const fs = require("fs");

fs.writeFile("./ramlal.txt","This is my data file.",(err)=>{
    if(err){
        throw new Error(err);
    }
    console.log("ramlalFile was wriiten successfully.");
})

fs.readFile("./ramlal.txt","utf-8",(err,data)=>{
    if(err){
        throw new Error(err);
    }
    else{
        console.log(data);
    }
})
try{
    fs.writeFileSync("./ramukaka.txt","this file created with new data.");
    console.log("ramukakaFile written successfully.");
}
catch(e){
    console.log(e);
}
try{
    const readnewfile = fs.readFileSync("./ramukaka.txt","utf-8");
    console.log(readnewfile);
}
catch (e){
    console.log(e);
}
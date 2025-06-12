const fs = require('fs');

const os = require('os');
console.log("Total cpu's:",os.cpus().length);
/*a
fs.writeFile("./newfile.txt","this is my new file",(err)=>{
    if(err){
        throw new Error(err);
    }
    console.log("File was written successfully.");
});*/

console.log("1");
//when we use Sync then the process wait until it is completed and then move forward to the next one.
const result = fs.readFileSync("./newfile.txt","utf-8");
console.log(result);
console.log("2");


//Async
console.log("3");
fs.readFile("./newfile.txt","utf-8",(err,data)=>{
    if(err){
        throw new Error(err);
    }
    else{
        console.log(data);
    }
});
console.log(4);
console.log(5);  

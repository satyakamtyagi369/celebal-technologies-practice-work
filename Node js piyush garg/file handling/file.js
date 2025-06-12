const fs = require('fs');

//Sync
//fs.writeFileSync("./text.txt","Hare Krishna");


// Async
//fs.writeFile("./Contacts.txt","Satyakam Tyagi: +91 7818875457",(err)=>{});


//const result = fs.readFileSync("./Contacts.txt","utf-8");
//console.log(result);

fs.readFile("./Contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log(result);
    }
});
//for adding some data in the previous or inbuilt files we use this:
fs.appendFileSync("./Contacts.txt",`${Date.now()} Hare Krishna`);
// for copy the data of a file and then paste in the new file and exist in different file diretories, we
// use this: cpSync(Copy Synchronise).
//fs.cpSync("./Contact.txt","./Contact-copy.txt");


// for deleting the files, we used this property, unlink
//fs.unlinkSync("./Contact.txt");


if (fs.existsSync("./Contacts.txt")) {
    console.log(fs.statSync("./Contacts.txt"));
} else {
    console.log("File does not exist.");
}








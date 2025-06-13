const fs = require('fs');
const { setDefaultHighWaterMark } = require('stream');
/*
fs.writeFile("./text.txt", "Hare Krishna", (err)=>{
    if(err){
        console.error("Error writing file:", err);
    }
    else{
        console.log("file written successfully");
    }
})*/
/*
fs.readFile("./text.txt", "utf-8", (err, data)=>{
    if(err){
        console.error("Error reading file:", err);
    }
    else{
        console.log("File content:", data);
    }
})*/
/*
fs.appendFile("./text.txt", "\n, Hare Rama", (err)=>{
    if(err){
        console.error("Error appending to file:", err);
    }
    else{
        console.log("Data appended successfully.");
    }
});*/
/*
fs.writeFileSync("./newfile.txt", "This is a new file for delete operation.", (err,data)=>{
    if(err){
        throw new Error("Error writing file:", err);
    }
    else{
        console.log("New file created successfully.");
    }
})*/
/*
fs.unlink("./newfile.txt", (err)=>{
    if(err){
        throw new Error("Error deleting file:", err);
    }
    else{
        console.log("file deleted successfully.");
    }
})*/
/*
fs.rename("./text.txt", "./renamed_text.txt", (err)=>{
    if(err){
        throw new Error("Error renaming file:",err);
    }
    else{
        console.log("File rename successfully.");
    }
})*/

//make folder
/*
fs.mkdir("./myfolder", (err)=>{
    if(err){
        throw new Error("Error creating folder:", err);
    }
    console.log("Folder created successfully.");
})
*/
// Directory ko read karne ke liye we use
/*
fs.readdir("./", (err,files)=>{
    if(err){
        throw new Error("Error reading directory:", err);
    }
    console.log("Files in directory:", files);
    files.forEach(file =>{
        console.log(file);
    })
})*/

// Directory ko delete karne ke liye we use
/*
fs.rmdir("./myfolder", (err)=>{
    if(err){
        throw new Error("Error deleting folder:", err);
    }
    console.log("Folder deleted successfully.");
})
*/

// file statistics
/*
fs.stat("./renamed_text.txt", (err, stats)=>{
    if(err){
        throw new Error("Error getting file stats:", err);
    }
    console.log("File stats:", stats);
    console.log("Is file:", stats.isFile());
    console.log("Is directory:", stats.isDirectory());
    console.log("file size:", stats.size);
    console.log("Created at:", stats.birthtime);
    console.log("Modified at:", stats.mtime);
    console.log("Accessed at:", stats.atime);
    console.log("File permissions:", stats.mode);
    console.log("File inode:", stats.ino);
    console.log("File device:", stats.dev);
    console.log("File blocks:", stats.nblocks);
    console.log("File block size:", stats.blksize);
    console.log("File links:", stats.nlink);
    console.log("File UID:", stats.uid);
    console.log("File GID:", stats.gid);
    console.log("File flags:", stats.flags);
    console.log("File generation:", stats.generation);
})*/

// file permissions check karna
/*
fs.access("./renamed_text.txt", fs.constants.R_OK | fs.constants.W_OK | fs.constants.F_OK, (err) => {
    if(err){
        console.error("File is not accessible:", err);
    }
    else{
        console.log("File is accessible for reading and writing.");
    }
});
*/
/*
fs.rename("./renamed_text.txt", "./text.txt", (err) =>{
    if(err){
        throw new Error(err);
    }
    console.log("file renamed successfully to text.txt");
})*/
/*
// Barde file ke liye hum readstream use karte hain, jishse hum data ko chunks mein read kar sakte hain.
// aur chunks ka size predefine bhi hota hai, aur hum usko set bhi kar sakte hain.
// using setDefaultHighWaterMark property.
const readstream = fs.createReadStream("./text.txt",{encoding: 'utf-8'},{setDefaultHighWaterMark: 1024});
    readstream.on('data', (chunk) => {
        console.log("Data chunk received:", chunk);
    })
    readstream.on('end', () =>{
        console.log("file reading completed.");
    })
    readstream.on('error', (err) => {
        console.error("Error reading file:", err);
})
        */
       /*
const writestream = fs.createWriteStream("./output.txt", {encoding: 'utf-8'});
writestream.write("This file apply by createWriteStream.\n");
writestream.write("This is the second line.\n");
writestream.end((err) =>{
    if(err){
        console.error("Error writing to file:", err);
    }
    else{
        console.log("Data written to file successfully.");
    }
})
writestream.on('finish', () => {
    console.log("All data has been written to the file.");
})*/
// using pipe method to read data from one file and write it to another file
//here we use how to perform unpipe operation when we want to stop piping data from one stream to another.
/*const readstream = fs.createReadStream("./text.txt", {encoding: 'utf-8'});
const writestream = fs.createWriteStream("./output.txt", {encoding: 'utf-8'});
readstream.unpipe(writestream);
writestream.on('finish',(err) =>{
    if(err){
        console.error("Error writing to file:", err);
    }
    console.log("Data piped successfully from text.txt to output.txt");
}) */
// now we will use the pipe method to read data from one file and write it to another file
// with also appending the data to the output file also using the flag 'a' in the createWriteStream method.
/*
const readstream = fs.createReadStream("./text.txt", {encoding: 'utf-8'});
const writestream = fs.createWriteStream("./output.txt", {encoding: 'utf-8', flags:'a'});
readstream.pipe(writestream);
writestream.on('finish', () =>{
    console.log("Data piped successfully from text.txt to output.txt");
    readstream.close();
    writestream.close();
})*/
// watching a file for changes

fs.watchFile("./text.txt", (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        console.log("File has been modified.");

        fs.readFile("./text.txt", "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log("Updated file content:\n", data);
            }
        });
    } else {
        console.log("ℹFile was accessed, but not modified.");
    }
});





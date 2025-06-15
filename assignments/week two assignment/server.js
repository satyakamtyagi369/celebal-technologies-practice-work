const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const filedirectory = __dirname;

const server = http.createServer((req,res)=>{
    const parsedurl = url.parse(req.url, true);
    const pathname = parsedurl.pathname;
    const query = parsedurl.query;

    if(pathname === '/create'){
        const filename = query.filename;
        const filepath = path.join(filedirectory,filename);
        const content = query.content;
        fs.writeFile(filepath,content, (err)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end("This file is not created because of some error.");
            }
            else{
                res.writeHead(201,{'Content-Type':'text/plain'});
                res.end(`File ${filename} created successfully.`);
            }
        });
    }
    else if(pathname === '/read'){
        const filename = query.filename;
        const filepath = path.join(filedirectory,filename);
        fs.readFile(filepath,'utf-8',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.end("This file is not found.");
            }
            else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(`Content of ${filename}:\n${data}`);
            }
        });
    }
    else if(pathname === '/delete'){
        const filename = query.filename;
        const filepath = path.join(filedirectory,filename);
        fs.unlink(filepath, (err)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.end("This file is not found to delete.");
            }
            else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(`File ${filename} deleted successfully.`);
            }
        });
    }
    else if(pathname === '/update'){
        const filename = query.filename;
        const filepath = path.join(filedirectory,filename);
        const content = query.content;
        fs.appendFile(filepath,content, (err)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end("This file is not updated because of some error.");
            }
            else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(`File ${filename} updated successfully.`);
            }
        });
    }
    else if(pathname === '/list'){
        fs.readdir(filedirectory, (err, files)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end("Error reading directory.");
            }
            else{
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify(files));
            }
        });
    }
    else if(pathname === '/'){
        fs.readFile(path.join(filedirectory, 'index.html'), 'utf-8', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Internal Server Error: Unable to read index.html file.");
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if(pathname.endsWith('.css')){
        const cssfilepath = path.join(filedirectory, pathname);
        fs.readFile(cssfilepath,'utf-8', (err,data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end("404 Error: CSS file not found.");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            }
        })
    }
});
server.listen(PORT, (err)=>{
    if(err){
        throw new Error("Error in server creation:", err);
    }
    else{
        console.log(`Server is running on port ${PORT}`);
    }
});

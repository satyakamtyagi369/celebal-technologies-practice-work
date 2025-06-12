const http = require('http');
const fs = require('fs');
const url = require('url');
const myserver = http.createServer((req,res)=>{
    //console.log("New Request Received.");
    //console.log(req.headers);
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received.\n`;
    fs.appendFile('./log.txt',log,(err,data)=>{
       // res.end("Hare Krishna from server again.");
       const myurl = url.parse(req.url,true);
       console.log(myurl);
       switch(myurl.pathname){
        case '/': 
           if(res.method ==='GET') res.end("Home Page");
        case '/about': 
            const username = myurl.query.myname;
            res.end(`i am a ${username}`);
        break;
        default: res.end("Error:404, File Not Found.");
       }
    });
    //res.end("Hare Krishna from server.")
});

myserver.listen(8000,()=>{ console.log("Server started.")});
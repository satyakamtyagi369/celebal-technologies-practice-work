const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./httpmodule.html',function(err,data){
        if(err){
            res.writeHead(404);
            res.write("File Not Found.");
        }
        else{
            res.write(data);
        }
        res.end();
    })
   // res.write("Hare Krishna Server.")
});


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong.",error);
    }
    else{
        console.log('Server is listening on port',port);
    }
})
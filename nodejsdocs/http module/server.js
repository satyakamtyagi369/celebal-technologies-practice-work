const http = require('http');
const fs = require('fs');
// create a basic HTTP server using the http module
/*
const server = http.createServer((req,res)=>{
    res.write('Hare Krishna');
    res.end();
})
*/
// handle different routes and serve static file or json data.
// The server will respond with diffferent messages based on the url requested by the client.
/*
const server = http.createServer((req,res)=>{
    if(req.url ==='/home'){
        res.write('Welcome to the Home Page');
        res.end();
    }
    else if(req.url ==='/about'){
        res.write('Welcome to the About Page');
        res.end();
    }
    //sending json data
    else if(req.url ==='/api'){
        fs.readFile('./MOCK_DATA.json', 'utf-8', (err,data) =>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Internal Server Error: Unable to read data file.");
            }
            else{
                const users = JSON.parse(data);
                const jsonResponse = JSON.stringify(users,null, 2);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(jsonResponse);
            }
        })
    }
    else{
        res.end('404 Error not Found.');
    }
})
*/
//Handle the query parameters in the URL
const url = require('url');
// http://localhost:3000/?name=satyakam enter this in the browser to test the query parameter handling.
/*
const server = http.createServer((req,res)=>{
    const parsedurl = url.parse(req.url, true);
    const name = parsedurl.query.name;
    res.end(`Hare Krishna, ${name}`);
})
*/
// handle the POST request and reading body data from the request.
/*
const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        let body = 'me body hu, aayi baat samajh me.';
        req.on('data',chunk=>{
            body = body + chunk.toString();
        });
        req.on('end', () =>{
            console.log("Received body data:", body);
            res.end(`Received data: ${body}`);
        })
    }
})*/
// create a server that serves static files from a directory
/*
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('./index.html', 'utf-8', (err, data) =>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Internal Server Error: Unable to read index.html file.");
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    }
})*/
//Streaming large data from a file to the response
/*
const path = require('path');
const server = http.createServer((req,res)=>{
    if(req.url === '/file'){
        const filepath = path.join(__dirname, 'largefile.txt');
        //check if the file exists
        fs.access(filepath, fs.constants.F_OK, (err) => {
            if(err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end("File not found.");
                return;
            }
            //set headers optional but good for large files.
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Transfer-encoding': 'chunked'
            });
            // create a read stream and pipe it to the response.
            const readstream = fs.createReadStream(filepath);
            readstream.on('error', (err) =>{
                console.error("Error reading file:", err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Internal Server Error: Unable to read file.");
            })
        })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 Error: Not found.");
    }
})*/
// Keep alive connections.
// res.setHeader('Connection', 'keep-alive');

/*
server.listen(3000, () =>{
    console.log('Server is running on port 3000');
})*/

//Piping request to Another server(Proxying)
const httpproxy = require('http-proxy');
const proxy = httpproxy.createProxyServer();
http.createServer((req,res) =>{
    proxy.web(req, res, { target: 'http://localhost:4000'});
}).listen(3000);

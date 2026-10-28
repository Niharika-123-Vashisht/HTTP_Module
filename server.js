const http=require('http');
const home=require('./Routes/home');
const about=require('./Routes/about');

const server=http.createServer(function(req, res){
    if (req.method==='GET' && req.url=== '/'){
        home(req, res);
    }
    else if (req.method==='GET'&& req.url==='/about') {
        about(req, res);
    }
    else if (req.method==='POST' && req.url==='/'){
        res.end("POST method is working");
    }

    else if (req.method==='PUT' && req.url=== '/') {
        res.end("PUT method is working");
    }
    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(4000,()=>{
    console.log("Server is running.");
    console.log("Home Page: http://localhost:4000");
    console.log("About Page: http://localhost:4000/about");
});

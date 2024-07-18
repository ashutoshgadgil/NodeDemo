const http = require('http');

const PORT = 3000;
const server = http.createServer((req,res)=>{
    res.write("<h1>Welcome to NodeJS</h1>");
    res.end();
})

server.listen(PORT,()=>{
    console.log("Server started");
})
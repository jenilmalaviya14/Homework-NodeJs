// const express = require("express");
// const app = express();

//     app.get("/",(req,res)=>{
//         res.send("Hello")
//     })

//     app.listen(8080,()=>{
//         console.log("Server is running");
//     });


const http = require("http");

http.createServer(function(req,res){

        res.write("Done !!");
        return res.end()
        }).listen(1434,console.log("http server is runnning successfully"));

// http.createServer((req,res)=>{
//     fs.readFile("practice.html",(err,data)=>{
//         res.writeHead(200,{"content-type" : "text/html"})
//         res.write(data)
//         return res.end()
//     })
// }).listen(8080),()=>{console.log("Server is running")};



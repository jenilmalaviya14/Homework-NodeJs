const express = require("express");
const http = require("http");
const { connectDB } = require("./db/DBconnection");
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();

connectDB();

app.use("/v1", routes);

app.use((req, res, next) => {
        next(new Error("Route not found!"));
});

const server = http.createServer(app);

server.listen(config.port, () => {
        console.log("server listning port number 4040!");
});

// app.listen(5690)

// http.createServer(function(req,res){
//         res.write("Done")
//         res.end()
// }).listen(5690, console.log("server is successfully running"));







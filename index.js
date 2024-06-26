const http = require("http");
const fs = require("fs");
const url = require('url');

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("Entered in About Page");
});

app.listen(8080, ()=>{console.log("Server Started")});








//  --------------------- Simple Node.js ---------------



// http
//   .createServer((request, result) => {
//     const log = `${Date.now()} : ${request.url} New request received : ${request.method}\n`;
    
//     if(request.url == '/favicon.ico') return result.end();


//     const myURL = url.parse(request.url, true);
//     console.log(myURL);

//     fs.appendFile("./test.txt", log, (err, data) => {


//       switch (request.url) {
//         case "/":
//           result.end("Home Page");
//           break;

//         case "/about":
//           result.end("Yes Server Created Seccessfully by Shubham");
//           break;

//         default:
//           result.end("4O4 NOT FOUND");
//       }
//     });
//   })
//   .listen(8080, () => {
//     console.log("Server Started");
//   });

const fs = require("fs");

// fs.writeFileSync("./test.txt", "hey !");

// fs.writeFile("./test.txt", "hey asy", (err)=>{});


// const result  = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);



// fs.readFile("./contact.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });


// fs.appendFileSync("./test.txt", "\n hello world");


const os = require("os");

console.log(os.cpus().length);
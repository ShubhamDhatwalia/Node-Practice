
// One way for exports --------------------


// exports.add =(a,b)=>{
//     return a+b;
// }

// exports.sub = (a,b)=>{
//     return a-b;
// }



//  Another way fro exports ------------------------


function add1(a,b){
    return a+b;
}

function sub1(a,b){
    return a-b;
}


module.exports = {add1, sub1};
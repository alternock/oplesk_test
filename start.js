const msgAlternock = require("./msg_alternock");

const msg = {
   msgAlternock 
};

function start(){
    let alternock = msg.msgAlternock();
    console.log(alternock);
    
    return "start server";
}


let r = start();
console.log(r);
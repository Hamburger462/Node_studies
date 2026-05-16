const EventEmitter = require("events");
require("dotenv").config();

const event = new EventEmitter();

event.on("transfer", (sum) => {
    console.log(`Payment success: ${sum}`);
})

event.on("fraud-alert", (sum) => {
    console.log("BROKE ALERT");
})

setInterval(() => {
    const newSum = Math.round(Math.random() * 15000);
    if(newSum > process.env.LIMIT){
        event.emit("fraud-alert", newSum);
    }
    else{
        event.emit("transfer", newSum);
    }
}, 3000);
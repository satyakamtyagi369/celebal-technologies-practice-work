const eventemitter = require('events');
const emitter = new eventemitter();


// Register a Listener.
emitter.on('meraEventemithua',function(){
    console.log('Mera Event Trigger hua! as a callback or listener.');
})

//Raise an event.
emitter.emit('meraEventemithua');

emitter.on("greet",(name)=>{
    console.log(`Hare Krishna! ${name}`);
})
emitter.emit("greet","Satyakam Tyagi");
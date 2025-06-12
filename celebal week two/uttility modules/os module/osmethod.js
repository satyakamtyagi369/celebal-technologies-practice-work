const os = require('os');

//Endianness
console.log("Endianness:"+os.endianness());

//OS Type
console.log("OS Type:"+os.type());

//OS platform
console.log("OS Platform:"+os.platform());

//Total System Memory
console.log('Total Memory:'+os.totalmem()+'bytes');


// Total Free Memory
console.log("Free Memory:"+os.freemem()+'bytes');
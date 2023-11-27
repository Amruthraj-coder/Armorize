// const { log } = require('console');
const os= require('os');

console.log(os.arch());// returns the Os C.P.U architecture

console.log(os.platform()) //returns the operating system platfrom

console.log(os.cpus()); // returns the array of objects containing into CPU/core

console.log(os.totalmem());  // returns the total amount of system memory in bytes

console.log(os.freemem());  // returns the total amount of freee memory in bytes

console.log(os.hostname());  // returns the host name of the system

console.log(os.networkInterfaces()); // returns an object containing information about network-interface

console.log(os.version()); //  returns the os version 

console.log(os.type());  //returns the type of the os


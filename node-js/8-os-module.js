// this imports the whole OS Module 
const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// info about the system uptime
const uptime = os.uptime()
console.log(`The system has been up for : ` + uptime + " seconds");






// If we want to import only a specific function of a module
// then we can import it using this syntax
// const { uptime } = require('os');
// const x = uptime()
// console.log(`The system has been up for : ` + x);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log("\n\n\n\nThe information about the OS");
console.log(currentOS);
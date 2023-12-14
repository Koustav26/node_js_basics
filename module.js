// NPM modules

// const color = require("cli-color");

// console.log(color.yellow("Hello world"));

// Local module   =============>>>>>>>>>>

// const auth = require("./auth");

// auth.register("codersgyan");
// auth.login("codersgyan", "12345");

// register("koustav");

// (function (name) {
// this is a iife function (imediately invoked function)
//   var age = 25;
//   console.log(name);
// })("koustav");

// console.log(age); // age is not defined because age is declaired in the avobe function scope.
// this is the basic pricipal of the module in node js.
// In Node js every this is encapsulated like a box so if we want to
// send something from the module folder to other folder so we have to use
// In node js every file is module.

// Node js module is like a iife function example bellow ========>>>>>>>>
//  (function (exports,require,module,_dirname,_filename){ // this are the parameters which is in the background and ready for use in our code when required.
// function body will be here
//}())

// core modules =========>>>>>>>>>>

// const path = require("path");

// console.log(__filename);

// Methods we use in core modules in node js ======>>>>>

// dirname ===>>(when want to know the name of the folder in which we are now )

// console.log("folder name: ", path.dirname(__filename));

// filename =====>>>>(when we want to know the file name where we now currently working)

// console.log("file name: ", path.basename(__filename));

// Extention =====>>>>>>>(when we want to know the extention of the file)

// console.log("Extention name: ", path.extname(__filename));

// parse =======>>>>(it will give a object where we can know the root , file path(dir), base (file name), ext(extention), file name(name))

// console.log("Parse : ", path.parse(__filename));

//  Join ========>>>>(It will create a url by joining multiple folder and files in that folders)

// console.log("join : ", path.join(__dirname, "order", "app.js"));

//console.log("join : ", path.join(__dirname(current file name), "order"(the foler name which we want to join), "app.js"(file name in the ORDER folder)));

// File system  =======>>>>>(with this we can create a folder and file. we can also read the data of a file and we can write data on the file. )
// to use this file system firstly we have to import the file system and we use the require mothod.

// const fs = require("fs");
// const { dirname } = require("path");

// make a directory (create folder)

// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder created....");
// });

// create a file (to create a file)

// fs.writeFile(path.join(__dirname, "/test", "text.txt"), "Hello Node", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File created in test folder...");
// });

// (After creating a new file in a specified folder if we run again
// node module.js then the code not gie us any type of error but it will
// follow the path and check if the file name is same then it will
//replace all is written in the file with the new context of the file
// when we reun the code again)

// (if we want to add some context in the file which we create early)

// fs.writeFile(
//   path.join(__dirname, "/test", "text.txt"),
//   "Hello Node\n",
//   (err) => {
// (if we want to show the new data in a new line then we have to to just "\n" after data.)
//     if (err) {
//       throw err;
//     }

//     fs.appendFile(
//       path.join(__dirname, "/test", "text.txt"),
//       "More Node js codes\n",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("Data added...");
//       }
//     );

//     console.log("File created in test folder...");
//   }
//);

// Read a file

// 1st process --------->

// fs.readFile(path.join(__dirname, "test", "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const content = Buffer.from(data);
//   console.log(content.toString());
// });

// 2nd process ---------->

// fs.readFile(path.join(__dirname, "test", "text.txt"), "UTF-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// operating system module ---------> (This module can deliver every information
// on which computer it is running about its operating system.)

// const os = require("os");

// To know the type of the operating system ---------->

// console.log("os type :", os.type());

// Want to know about the platform ------>

//console.log("os platform :", os.platform());

// wnat to know the CPU architechture ------------>

// console.log("Cpu architecture :", os.arch());

// If you want to know more abouth the CPU ---------->

// console.log("Cpu details :", os.cpus());

// Want to know about the free memory about the computer- -------->

// console.log("Free Memory :", os.freemem());

// Want to know the total memory of our computer ----------->

// console.log("Total Memory :", os.totalmem());

// Want to know about the time when your computer start ------->

// console.log("Up Time : ", os.uptime());

// <-------------------- EVENTS MODULE ----------------->

//
//const Emitter = require("events"); // (here require("events") will return a class and we have to change it to OBJECT.)

// const myEmitter = new Emitter();

// myEmitter.on("someeventname", (data) => {
//   console.log(data);
// });

// myEmitter.emit("someeventname", {
//   name: "Koustav",
//   lastname: "Basak",
//   address: "15 M N K Road(S)",
// });

// <------ Practical Example --------->

// class Auth {
//   register(username) {
//     console.log("Registered Successflly...");
//   }
// }

// const auth = new Auth();
// auth.register("Koustav");

// npm module
const color = require("cli-color");

console.log(color.yellow("hello"));
console.log(color.red("hello"));

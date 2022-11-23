// NPM modules

// const color = require("cli-color");

// console.log(color.yellow("Hello world"));

// Local module   =============>>>>>>>>>>

const auth = require("./auth");

auth.register("codersgyan");
auth.login("codersgyan", "12345");

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

// create a file

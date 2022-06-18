"use strict";
// No GitHub flag alert: Build Script


// File System
const fs = require('fs');

// Prefix
const prefix = "[NGFA Builder] ";




console.log("\n");

// console.log with prefix
function Log (message) {
    console.log(prefix + message);
}


// Tell the user that the script is being built
Log("Making script...");


var Working = new String("");

const meta = fs.readFileSync('./userscript/meta.js', {encoding:'utf8', flag:'r'});
Working += meta;
Working += "\n\n";

const info = fs.readFileSync('./userscript/info.js', {encoding:'utf8', flag:'r'});
Working += info;
Working += "\n\n";

const code = fs.readFileSync('./dist/bundle.js', {encoding:'utf8', flag:'r'});
Working += code;


const Output = Working.valueOf();



fs.writeFileSync("./dist/No-GH-Flag-Alert.user.js", Output);
Log("Done!");
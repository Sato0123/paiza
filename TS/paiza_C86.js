"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var lines = [];
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    // ここからcoding
    var forbidden = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
    console.log(Array.from(lines[0]).map(function (v) {
        if (forbidden.includes(v))
            return "";
        return v;
    }).join(""));
});

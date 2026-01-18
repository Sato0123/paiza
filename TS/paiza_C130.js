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
    var targets = lines.slice(1);
    var result = targets
        .map(function (v, i) { return v.includes("n") ? i + 1 : null; })
        .filter(function (id) { return id !== null; });
    console.log(result.length);
    result.forEach(function (v) { console.log(v); });
});

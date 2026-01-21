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
    var list = Array.from({ length: Number(lines[0]) }, function (_, i) { return i + 1; });
    var out = lines.slice(1).map(Number);
    console.log(out.reduce(function (rest, v) {
        if (list.includes(v)) {
            list[v - 1] = null;
            rest--;
        }
        return rest;
    }, Number(lines[0])));
});

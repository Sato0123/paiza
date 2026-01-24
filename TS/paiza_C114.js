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
    var array = lines.slice(1);
    if (array.reduce(function (bool, v, i) {
        if (i == 0)
            return 1;
        if (bool == 0)
            return 0;
        var begin = v[0];
        var last = array[i - 1].slice(-1);
        if (begin === last)
            return 1;
        else {
            console.log(last, begin);
            return 0;
        }
    }, 1))
        console.log("Yes");
});

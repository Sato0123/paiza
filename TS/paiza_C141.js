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
    var candidate = lines.slice(1);
    var result = candidate.reduce(function (map, v, i) {
        if (!map.has(v))
            map.set(v, 1);
        else {
            var old = map.get(v) || 0;
            map.set(v, old + 1);
        }
        return map;
    }, new Map());
    var entry = Array.from(result.entries()).reduce(function (max, v, i) {
        if (v[1] > max[1])
            return v;
        else
            return max;
    }, ["", 0]);
    console.log(entry[0]);
});

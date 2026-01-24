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
    var days = lines.slice(1);
    var min = 100;
    var max = 0;
    for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
        var day = days_1[_i];
        var _a = day.split(" ").map(Number), time_x = _a[0], time_f = _a[1], time_y = _a[2];
        var time = time_x + time_f + (24 - time_y);
        if (time < min)
            min = time;
        if (time > max)
            max = time;
    }
    console.log(min);
    console.log(max);
});

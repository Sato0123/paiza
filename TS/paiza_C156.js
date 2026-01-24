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
    var hours = 0;
    var minutes = 0;
    var time_table = lines.slice(1);
    for (var _i = 0, time_table_1 = time_table; _i < time_table_1.length; _i++) {
        var times = time_table_1[_i];
        var _a = times.split(" ").map(function (v) { return v.split(":"); }).flat().map(Number), hs = _a[0], ms = _a[1], he = _a[2], me = _a[3];
        if (me > ms) {
            minutes += (me - ms);
        }
        else {
            minutes += (60 - ms) + me;
            hours -= 1;
        }
        hours += he - hs;
    }
    while (minutes >= 60) {
        minutes = minutes - 60;
        hours += 1;
    }
    console.log(hours, minutes);
});

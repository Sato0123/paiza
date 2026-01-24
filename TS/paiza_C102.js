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
    var days_A = Number(lines[0]);
    var sch_A = lines.slice(1, days_A + 1).map(Number);
    var sch_B = lines.slice(days_A + 2).map(Number);
    var swi = true;
    var sch = Array.from({ length: 31 }, function (v, i) {
        if (sch_A.includes(i + 1) && sch_B.includes(i + 1)) {
            if (swi === true) {
                swi = false;
                return "A";
            }
            else {
                swi = true;
                return "B";
            }
        }
        else if (sch_A.includes(i + 1) && !sch_B.includes(i + 1))
            return "A";
        else if (!sch_A.includes(i + 1) && sch_B.includes(i + 1))
            return "B";
        else
            return "x";
    });
    console.log(sch.join("\n"));
});

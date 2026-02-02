"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var num = Number(lines[0]);
    var lease = lines[1];
    var lease2 = lines[2];
    // console.log(num,lease,lease2);
    if (lease.length !== lease2.length) {
        console.log("No");
        return;
    }
    for (var i = 0; i < lease.length; i++) {
        if (lease === lease2) {
            console.log("Yes");
            return;
        }
        var lease2_array = __spreadArray([], __read(lease2), false);
        var tmp = lease2_array.pop();
        if (tmp === undefined) {
            // error case
            return;
        }
        else
            lease2_array.unshift(tmp);
        lease2 = lease2_array.join("");
        // console.log(lease2)
    }
    console.log("No");
});

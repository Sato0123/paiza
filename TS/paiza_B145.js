"use strict";
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
function checkBingo(card) {
    var bingo = 0;
    // line check
    for (var _i = 0, card_1 = card; _i < card_1.length; _i++) {
        var line = card_1[_i];
        if (line.every(function (v) { return v === null; }))
            bingo += 1;
    }
    var _loop_1 = function (i) {
        var col = card.map(function (v) { return v[i]; });
        if (col.every(function (v) { return v === null; }))
            bingo += 1;
    };
    // column check
    for (var i = 0; i < card.length; i++) {
        _loop_1(i);
    }
    // cross check
    var cross = card.map(function (v, i) { return v[i]; });
    if (cross.every(function (v) { return v === null; }))
        bingo += 1;
    cross = card.map(function (v, i) { return v[card.length - 1 - i]; });
    if (cross.every(function (v) { return v === null; }))
        bingo += 1;
    return bingo;
}
reader.on('close', function () {
    // ここからcoding
    // init
    var _a = lines[0].split(" ").map(Number), side = _a[0], _ = _a[1];
    var card = lines.slice(1, side + 1).map(function (v) { return v.split(" ").map(Number); });
    var numbers = __spreadArray([0], lines[side + 1].split(" ").map(Number), true);
    // console.log(card);
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        innercard: for (var i = 0; i < card.length; i++) {
            for (var j = 0; j < card.length; j++) {
                if (num === card[i][j]) {
                    card[i][j] = null;
                    break innercard;
                }
            }
        }
    }
    // console.log(card);
    console.log(checkBingo(card));
});

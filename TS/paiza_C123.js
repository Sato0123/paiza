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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    var e_1, _a;
    // ここからcoding
    var res = lines.slice(1, Number(lines[0]) + 1).map(function (v) {
        return {
            now: 0,
            max: Number(v)
        };
    });
    var ope = lines.slice(Number(lines[0]) + 2);
    // console.log(res);
    // console.log(ope);
    ope.forEach(function (v) {
        var _a = __read(v.split(" ").map(Number), 3), start = _a[0], end = _a[1], num = _a[2];
        // console.log(start, end , num)
        for (; start <= end; start++) {
            res[start - 1].now += num;
            if (res[start - 1].now > res[start - 1].max)
                res[start - 1].now = res[start - 1].max;
        }
    });
    try {
        for (var res_1 = __values(res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
            var x = res_1_1.value;
            console.log(x.now);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});

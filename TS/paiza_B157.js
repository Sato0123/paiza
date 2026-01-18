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
    var _a = lines[0].split(" ").map(Number), shop = _a[0], vegi = _a[1];
    var vegi_data = Array.from({ length: vegi }, function () { return { shop: -1, price: Infinity }; });
    var shops = lines.slice(1).map(function (v) { return v.split(" ").map(Number); });
    shops.forEach(function (veges, id) {
        veges.forEach(function (price, i) {
            if (price < vegi_data[i].price) {
                vegi_data[i].price = price;
                vegi_data[i].shop = id;
            }
        });
    });
    var shop_sets = new Set(vegi_data.map(function (v) { return v.shop; }));
    console.log(shop_sets.size);
});

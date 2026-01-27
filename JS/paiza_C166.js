process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});

const toCoin = (sum ,v) => {
    return sum - v;
}
const coins = [500,100,50,10,5,1];

reader.on('close', () => {
    let sum = Number(lines[0]);
    let cnt = 0;

    for (let coin of coins){
        while(sum >= coin){
            sum -= coin;
            cnt++;
        }
    }

    console.log(cnt);
}
);
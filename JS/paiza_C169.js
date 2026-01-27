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
reader.on('close', () => {
  //ここからcoding
  let p = Number(lines[0]);
  let sum = 0;
  const rv = Number(lines[1]) / 100;
  for (let i = 0; i < 7; i++){
   sum += p;
   p = Math.floor(p * rv);
  }
  console.log(sum);
});
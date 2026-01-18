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
  console.log(Math.ceil(lines[1].split(" ").map(Number).reduce((sum,cu)=>sum + cu) / Number(lines[0])))
});
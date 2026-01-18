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
  const [_,cri] = lines[0].split(" ").map(Number);
  let sum = 0;
  for (let distance of lines.slice(1).map(Number)){
    if (distance <= cri)
      sum += distance;
  }
  console.log(sum);
});
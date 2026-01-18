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
  const [_,side] = lines[0].split(" ").map(Number); 
  console.log(side * lines.slice(1).map(Number).reduce((sum,overlap)=> sum + side - overlap,side));
});
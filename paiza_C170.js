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
  const [_,goal] = lines[0].split(" ");
  const rest = goal - lines[1].split(" ").map(Number).reduce((p,c)=>p+Math.floor(c/100),0);
  rest < 0 ? console.log(0) : console.log(rest * 100);
});
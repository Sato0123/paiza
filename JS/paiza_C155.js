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
  const NGword = lines[0];
  const line = Number(lines[1]);
  for (let context of lines.slice(2)){
    if (context.includes(NGword)) 
      console.log("Yes");
    else
      console.log("No");
  }
});
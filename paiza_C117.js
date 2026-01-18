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
  const [l,month] = lines[0].split(" ").map(Number);
  const [building,man,profit] = lines[1].split(" ").map(Number);

  let cnt = 0;
  for (let i = 0; i < l; i++){
    if (0 > profit * Number(lines[i+2]) - man * month - building)
      cnt++;
  }
  console.log(cnt);
});
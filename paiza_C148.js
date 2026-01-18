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
  let [enemy_cnt,level] = lines[0].split(" ").map(Number);
  const enemies = Array.from({length:enemy_cnt},(v,i)=>Number(lines[i+1]));
  for (let enemy of enemies){
    if (level > enemy)
      level += (enemy / 2);
    else if (level < enemy)
      level -= (level / 2);
    else{}
    level = Math.floor(level);
  }
  console.log(level);
});
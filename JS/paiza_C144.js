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
  const len = Number(lines[0]);
  let cnt = 0;
  for(let i = 0; i < len; i++){
    let [alice,bob] = lines[i+1].split(" ");
    if (bob === 'G'){
      if (alice === 'P')
        cnt++;
    }
    if (bob === 'C'){
      if (alice === 'G')
        cnt++;
    }
    if (bob === 'P'){
      if (alice === 'C')
        cnt++;
    }
  }
  console.log(cnt);
});
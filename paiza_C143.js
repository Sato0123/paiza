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
  const input = lines[0];
  let prev;
  console.log([...input].map((v)=>{
    if(v === '-' && prev === '-'){
      prev = v;
      return '';
    }
    else{
      prev = v;
      return v;
    }
  }).join(""));
});
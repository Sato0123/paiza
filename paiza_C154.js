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
  const [last,q] = lines[0].split(" ").map(Number);
  let max = 0;
  const sum = lines[1].split(" ").map(Number).reduce((sum,v,i)=>{
      if (v > max && v >= q)  
        max = v;
      return sum + v;
    },0)
  console.log(sum - max / 2)
});
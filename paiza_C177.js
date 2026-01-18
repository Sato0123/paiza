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
  const c_min = 3; let cnt = 0; let lank = ""; 
  const [u_min,u_sum] = lines[1].split(" ").map(Number);
  const sum = lines[2].split(" ").map(Number).reduce((sum,cu)=> {
    if (cu >= u_min)
      cnt++;
    return sum + cu
  },0)
  sum >= u_sum && cnt >= c_min ? lank = "silver" : lank = "bronze";
  console.log(lank);
});
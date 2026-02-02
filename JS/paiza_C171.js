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
  const [lap,cnt] = lines[0].split(" ").map(Number);
  const words = lines[1].split(" ")
  // console.log(lap,cnt)
  // console.log(words)
  const res = words.reduce((a,v)=>{
    if (a.res === 0)
      return {prev: 0, res: 0}
    if (v.length < lap)
      return {prev: 0, res: 0}
    if (a.prev === v.slice(0,lap))
      return {prev: v.slice(-lap), res: 1}
    else
      return {prev: 0, res: 0}
  },{prev: words[0].slice(0,lap), res: 1})
  console.log(res.res ? "YES" : "NO")
});
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
function diffArray(room,piramid){
    return room.reduce((sum,line,row)=>{
      return sum + line.reduce((sum_line,cu,col)=>{
        return sum_line + cu - piramid[row][col];
      },0)
    },0);
}
reader.on('close', () => {
  //ここからcoding
  const end = Number(lines[0]);
  const center = Math.ceil(end / 2);
  room = Array.from({length:end},(_,i)=>lines[i+1].split(" ").map(Number));
  piramid = Array.from({length:end},(_,row)=>{
    let limit = row < center-1 ? row+1 : end-row;
    if (row === center-1)
      limit = center;
    let cnt = 0;
    return Array.from({length:end},(_,col)=>{
      if (col < center){
          cnt++;
          return (cnt > limit) ? limit : cnt;
      } else {
          cnt--;
          return (cnt > limit) ? limit : cnt;
      }
    })
  });
  console.log(diffArray(room,piramid));
});
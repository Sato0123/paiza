import * as readline from 'readline';
const lines: string[] = [];
const reader: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line: string) => {
  lines.push(line);
});
reader.on('close', () => {
  // ここからcoding
  let res = lines.slice(1,Number(lines[0]) + 1).map((v)=>{
   return {
      now: 0,
      max: Number(v)
   } 
  });
  let ope = lines.slice(Number(lines[0]) + 2)
  // console.log(res);
  // console.log(ope);

  ope.forEach(v=>{
    let [start,end,num] = v.split(" ").map(Number)
    // console.log(start, end , num)
    for (;start <= end; start++){
      res[start - 1].now += num;
      if (res[start - 1].now > res[start - 1].max)
        res[start - 1].now = res[start - 1].max
    }
  });

  for (let x of res)
    console.log(x.now)
});
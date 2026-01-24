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
  const array = lines.slice(1);
  if(array.reduce((bool,v,i)=>{
    if (i == 0)
      return 1;
    if (bool == 0)
      return 0;
    let begin = v[0];
    let last = array[i - 1].slice(-1);
    if (begin === last)
      return 1;
    else{
      console.log(last,begin);
      return 0;
    }
  },1))
    console.log("Yes")
});
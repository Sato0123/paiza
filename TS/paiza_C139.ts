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
  const list : (number | null)[] = Array.from({length:Number(lines[0])},(_,i)=>i+1)
  const out : number[] = lines.slice(1).map(Number);
  console.log(out.reduce((rest:number,v:number)=>{
      if (list.includes(v)){
        list[v - 1] = null;
        rest--;
      }
      return rest;
  },Number(lines[0])))
});
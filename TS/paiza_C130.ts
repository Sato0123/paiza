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
  const targets = lines.slice(1);
  const result = 
    targets
    .map((v,i)=>v.includes("n") ? i+1 : null)
    .filter((id) : id is number => id !== null);
  console.log(result.length);
  result.forEach((v)=>{console.log(v)});
});
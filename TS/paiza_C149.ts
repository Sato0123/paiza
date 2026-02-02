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
const [rule, str] = lines;

 const ruleset = new Set([...rule]);
 
 let res = [...str].map((v: string)=>{
   if (ruleset.has(v.toUpperCase()))
     return v.toUpperCase()
   else
     return v.toLowerCase()
 });

 console.log(res.join(""));
});
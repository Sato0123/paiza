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
  const days_A = Number(lines[0]);
  const sch_A = lines.slice(1, days_A + 1).map(Number);
  const sch_B = lines.slice(days_A + 2).map(Number);
  let swi = true;
  let sch = Array.from({length:31},(v,i)=>{
      if(sch_A.includes(i + 1) && sch_B.includes(i + 1)){
        if (swi === true){
          swi = false;
          return "A";
        }
        else{
          swi = true;
          return "B";
        }
      }
      else if (sch_A.includes(i + 1) && !sch_B.includes(i + 1))
        return "A";
      else if (!sch_A.includes(i + 1) && sch_B.includes(i + 1))
        return "B";
      else
        return "x";
  })
  console.log(sch.join("\n"));
});

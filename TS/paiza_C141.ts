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
  const candidate = lines.slice(1);
  const result = candidate.reduce((map:Map<string,number>,v:string,i:number)=>{
    if (!map.has(v))
      map.set(v,1);
    else{
      const old = map.get(v) || 0;
      map.set(v, old + 1);
    }
    return map;
  },new Map<string,number>());
  const entry = Array.from(result.entries()).reduce((max,v,i)=>{
      if (v[1] > max[1])
        return v;
      else
        return max;
  },["",0])
  console.log(entry[0]);
});
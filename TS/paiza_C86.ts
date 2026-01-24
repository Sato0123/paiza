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
  const forbidden = ["a","i","u","e","o","A","I","U","E","O"]

  console.log(Array.from(lines[0]).map(function (v) {
      if (forbidden.includes(v))
          return "";
      return v;
  }).join(""));
});
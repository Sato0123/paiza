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
  const days = lines.slice(1); 
  let min = 100;
  let max = 0;

  for (let day of days){
    let [time_x, time_f, time_y] = day.split(" ").map(Number);
    let time = time_x + time_f + (24 - time_y);
    if (time < min)
      min = time;
    if (time > max)
      max = time;
  }
  console.log(min);
  console.log(max);
});
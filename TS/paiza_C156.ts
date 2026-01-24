import { memoryUsage } from 'process';
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
  let hours = 0;
  let minutes = 0;

  const time_table = lines.slice(1);
  for (let times of time_table){
      let [hs,ms,he,me] = times.split(" ").map(v=>v.split(":")).flat().map(Number);
      if (me > ms){
        minutes += (me - ms);
      }
      else{
        minutes += (60 - ms) + me;
        hours -= 1;
      }
      hours += he - hs;
  }
  while (minutes >= 60){
    minutes = minutes - 60
    hours += 1;
  }
  console.log(hours,minutes);
});
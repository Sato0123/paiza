import * as readline from 'readline';
const lines: string[] = [];
const reader: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line: string) => {
  lines.push(line);
});

function checkBingo(card : (number | null)[][]){
  let bingo = 0;
  // line check
  for (let line of card){
    if(line.every(v=>v === null))
      bingo += 1;
  }
  // column check
  for (let i = 0; i < card.length; i++){
    const col = card.map(v=>v[i])
    if(col.every(v=>v === null))
      bingo += 1;
  }
  // cross check
  let cross = card.map((v,i)=>v[i]);
  if(cross.every(v=>v === null))
     bingo += 1;
  cross = card.map((v,i)=>v[card.length-1 - i]);
  if(cross.every(v=>v === null))
     bingo += 1;
  return bingo;
}

reader.on('close', () => {
  // ここからcoding
  // init
  const [side,_] = lines[0].split(" ").map(Number);
  let card : (number|null)[][] = lines.slice(1,side + 1).map(v=>v.split(" ").map(Number));
  const numbers: number[] = [0,...lines[side + 1].split(" ").map(Number)];

  // console.log(card);
  for (const num of numbers){
    innercard: for (let i = 0; i < card.length; i++){
      for (let j = 0; j < card.length; j++){
        if (num === card[i][j]){
          card[i][j] = null;
          break innercard;
        }
      }
    }
  }
  // console.log(card);
  console.log(checkBingo(card));
});
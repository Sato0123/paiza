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
  const num = Number(lines[0]);
  const lease = lines[1];
  let lease2 = lines[2];
  // console.log(num,lease,lease2);
  if (lease.length !== lease2.length){
    console.log("No");
    return;
  }
  for (let i = 0; i < lease.length; i++){
    if (lease === lease2){
      console.log("Yes");
      return;
    }
    let lease2_array = [...lease2]
    let tmp: string | undefined= lease2_array.pop();
    if (tmp === undefined){
      // error case
      return ;
    }
    else
      lease2_array.unshift(tmp)
    lease2 = lease2_array.join("")
    // console.log(lease2)
  }
  console.log("No");
});
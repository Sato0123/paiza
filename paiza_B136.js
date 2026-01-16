function init_map(height){ 
  let array = Array.from({length:height},(v,i)=>lines[i+3].split(" "));
  return array;
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const [action_limit,height,width] = lines[0].split(" ").map(Number);
    // console.log(action_limit,width,height);
    let [row,column] = lines[1].split(" ").map(Number);
    row -= 1;
    column -= 1;
    // console.log(row,column);
    const actions = lines[2];
    // console.log(actions);

    let array = init_map(height);
    // console.log(array);
    for (let action of actions){
       switch (action){
          case `F`:
            row -=1;
            break;
          case `B`:
            row +=1;
            break;
          case `L`:
            column -=1;
            break;
          case `R`:
            column +=1;
            break;
          default :
        }
      console.log(array[row][column]);
    }
});
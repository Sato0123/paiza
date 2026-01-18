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
  interface datas{
    shop: number;
    price: number;
  }
  const [shop,vegi] = lines[0].split(" ").map(Number);
  const vegi_data: datas[] = Array.from({length:vegi},()=>{return {shop:-1,price:Infinity}})
  const shops = lines.slice(1).map((v)=>v.split(" ").map(Number))
  shops.forEach((veges,id)=>{
    veges.forEach((price,i)=>{
      if(price < vegi_data[i].price){
        vegi_data[i].price = price;
        vegi_data[i].shop = id;
      }
    })
  })
  const shop_sets = new Set(vegi_data.map((v)=>v.shop));
  console.log(shop_sets.size);
});
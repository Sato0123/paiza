# paiza

## Instraction

### Create file
- 使用する言語のディレクトリに入る。

- create.shを実行する。
  - 引数は問題番号
  - 環境変数 id に問題番号が設定される。

```
source create.sh A51
```

### Execute file

- ソースコードを書く。
  - 入力例は *paiza_NUM.txt* に記述する。

- exe.shを実行する。

```
source exe.sh
```

### Output

- *output.txt* に結果が出力される。

## tips
- forEachは副作用を起こしてしまう。filter map find reduce を優先する。
  - [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
- オブジェクトや配列に対してメソッドを使う方針のほうが上手くまとまる。(C102)

- 大体使うメソッドはこれ 
  - [【JavaScript】Arrayオブジェクト（配列）のメソッド一覧](https://qiita.com/flat-ito/items/9a3afd109b1c838c0ae3)

## 使いこなしていきたいもの
- Array
  - filter
  - indexOf
  - push
  - pop
  - unshift
  - shift
  - concat
  - splice
  - fill
  - sort
  - reverse
  - every
  - some
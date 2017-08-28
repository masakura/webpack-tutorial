# 設定ファイルで楽をしよう!
コマンドライン引数をいちいち指定するのは面倒ではありませんか? しかもこれからどんどん引数が増えていきます。設定ファイルを使って楽をしましょう!

## 準備
設定ファイル [webpack.config.js](./webpack.config.js) ファイルを用意します。

```javascript
// webpack.config.js
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
```

## 取り込む
[Lesson 1](../lesson1) と同じことを今度は引数なしでやります。

[index.html](./index.html) と [entry.js](./entry.js) は Lesson 1 と同じものです。

```
webpack
```

同じようにブラウザーで開いてみてください!


## 解説
### 設定ファイルの形式
webpack の設定ファイルは今回は JavaScript 形式を使いましたが、他にも JSON 形式だったり、package.json の中に書くこともできます。ですが、いくつかの理由により JavaScript 形式がおすすめです。

* JSON にはコメントが書けないが、JavaScript なら書ける
* JSON にはコードを含めることはできないが、JavaScript なら含めることができる


### 既定の設定ファイルの名前
設定ファイルの設定ファイルの名前は `webpack.config.js` ないしは `webpack.config.json` です。

`webpack --config webpack.prod.config.js` のように明示的に指定することもできます。

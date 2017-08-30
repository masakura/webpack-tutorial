# CSS も取り込む!
webpack は何も JavaScript だけのものではありません。CSS も取り込めちゃいます。

[css-loader](https://github.com/webpack-contrib/css-loader) と [style-loader](https://github.com/webpack-contrib/style-loader) を使って CSS を取り込みます。

## 準備
ローダーを二つインストールします。

```
npm install --save-dev css-loader style-loader
```

設定ファイル [webpack.config.js](./webpack.config.js) を書きます。

```javascript
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
};
```


## 取り込む
[main.css](./main.css) ファイルを用意します。

```css
body {
  background-color: aqua;
}
```

[entry.js](./entry.js) ファイルで CSS を取り込みます。

```javascript
import './main.css';
```

`webpack-dev-server --open` を実行してください。


## 解説
今回ローダーを二つ連鎖的に利用しました。分かりにくいですが、最後に書いたものから実行されるようです。

```javascript
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
```

この場合、`css-loader` が先に実行されます。こんな感じになると考えると分かりやすいようです。

```javascript
const css = 'body { background-color: aqua }';
const javascript = styleLoader(cssLoader(css));
```

[style-loader](https://github.com/webpack-contrib/style-loader) と [css-loader](https://github.com/webpack-contrib/css-loader) は役割が異なります。

css-loader は CSS を読み込んで CSS を出力します。CSS に書かれている `import` や `url` を解決するためのものです。今回は `import` も `url` も使ってませんので、必要なかったりします。

style-loader は CSS を読み込んで style 要素を出力する JavaScript コードに変換します。

複数のローダーをチェーンして設定するのはよく行われています。


## おまけ
`webpack` を実行して [bundle.js](./bundle.js) ファイルを見て、どうなっているかどうか見てみましょう。


## ごめんなさい
この方法での CSS の取り込みはググるとよく見かけますが、あまりお勧めできない方法です。`bundle.js` ファイルが読み終わって実行されない限り CSS が適用されないからです。link 要素を直接書いた時に比べると若干遅れが出ます。

inuscript さんの[なんとなくで理解しないWebpackのCSS周辺](http://qiita.com/inuscript/items/0574ab1ef358fecb55b9)にいろいろ書かれているのでそちらを参考にして下さい。
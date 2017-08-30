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


## おまけ
`webpack` を実行して [bundle.js](./bundle.js) ファイルを見て、どうなっているかどうか見てみましょう。

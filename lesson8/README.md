# プラグインで圧縮
今まで様々なファイルを結合してきましたが、もちろん圧縮もできます!


## 準備
圧縮用のプラグイン [UglifyjsWebpackPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) をと webpack をインストールします。

```
npm install --save-dev uglifyjs-webpack-plugin webpack
```

[webpack.config.js](./webpack.config.js) ファイルを用意います。


## 圧縮する
未圧縮のものと比較するために webpack コマンドで圧縮されていない bundle.js を作ります。

```
webpack
```

出来上がった [bundle.js](./bundle.js) ファイルを開いてください。

[webpack.config.js](./webpack.config.js) ファイルにプラグインを追加します。ついでにファイル名も変更しています。

```javascript
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.min.js',
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
};
```

出来上がった [bundle.min.js](./bundle.min.js) ファイルを開きます。がっつり圧縮されているのがわかると思います。およそ 1/4 になりましたね。

| filename      | size
| ------------- | ----
| bundle.js     | 2,608 bytes
| bundle.min.js |   567 bytes


## 解説
プラグインはローダーと違って全体に影響する処理を担当します。

[結構たくさんある](https://webpack.js.org/plugins/)んですね。

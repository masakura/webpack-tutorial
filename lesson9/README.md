# Foundation for Sites を取り込む
集大成ってわけではありませんが、有名どころの CSS フレームワーク [Foundation for Sites](http://foundation.zurb.com/sites.html) を取り込みます!


## 準備
Foundation for Sites をインストールします。

```
npm install --save foundation-sites
```

CSS を取り込むためのローダーをインストールします。

```
npm install --save-dev style-loader css-loader
```

[webpack.config.js](./webpack.config.js) ファイルを用意します。

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

## やってみる
[entry.js](./entry.js) ファイルで Foundation for Sites の JavaScript ファイルと CSS ファイルを取り込みます。

```javascript
import 'foundation-sites/dist/css/foundation.css';
import 'foundation-sites/dist/js/foundation';
```

[index.html](./index.html) ファイルは Foundation for Sites のサンプルから引っ張ってきました!

`webpack-dev-server --open` を実行します。

それっぽいものが表示されましたが、ブラウザーのコンソールにエラーが表示されました!

```
bundle.js:10198 Uncaught ReferenceError: jQuery is not defined
    at Object.<anonymous> (bundle.js:10198)
    at __webpack_require__ (bundle.js:10145)
    at Object.<anonymous> (bundle.js:14629)
    at __webpack_require__ (bundle.js:10145)
    at Object.<anonymous> (bundle.js:21909)
    at __webpack_require__ (bundle.js:10145)
    at module.exports (bundle.js:10191)
    at Object.<anonymous> (bundle.js:10194)
    at __webpack_require__ (bundle.js:20)
    at Object.<anonymous> (bundle.js:9535)
```

jQuery がないそうです!

残念ながら、単純に import しただけでは使えないフレームワークも多いです。Foundation もそうですが、Bootstrap もそうです。


## jQuery を明示的に取り込む
jQuery を明示的に取り込む方法はいくつかありますが、今回は foundation.js ファイルを取り込む直前に jQuery を取り込むようにします。

まずは jQuery をインストールします。

```
npm install --save jquery
```

[imports-loader](https://github.com/webpack-contrib/imports-loader) をインストールします。今回のかなめとなるローダーです。

```
npm install --save-dev imports-loader
```

[webpack.config.js](./webpack.config.js) ファイルに追加します。

```javascript
  module: {
    rules: [
      { test: /foundation.js$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
```

もう一度 `webpack-dev-server --open` です。無事エラーが消えていると思います。


## 解説
バンドルした [bundle.js](./bundle.js) ファイルを見てみると、こんな感じで `jQuery` と `$` の両方に jQuery が設定されているのがわかると思います。

```javascript
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);
var $ = __webpack_require__(0);
```

今回の方法は foundation.js にだけ jQuery を公開する方法です。その他の JavaScript ファイルからは利用できません。ここでは解説しませんが、グローバル空間に取り込む方法もあります。

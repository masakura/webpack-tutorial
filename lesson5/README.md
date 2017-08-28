# babel-loader でトランスパイル!
webpack はバンドルする前に、ローダーを使って変換をすることができます。ここでは　JavaScript ファイルを結合する前に Babel を使って ES6+ -> ES5 変換をしてみます。


## 用語解説
### ES6 とは?
JavaScript の規格は ECMA によって策定されていて、ECMAScript というのが正式名称です。ES6 とは ECMAScript 6th Edition を略したもので、それより前の ES5 と比べると強化されています。また、ES6 から毎年改定されるようになり、ES2015 (ES6)・ES2016・ES2017 と西暦をつけて呼ぶのが一般的です。


### Babel とは?
ほとんどのブラウザーは仕様が策定されたときには ECMAScript の最新の機能を使えるようになっていることが多いですが、古いブラウザーはそうではありません。古いブラウザーのために、ES2015 などの新しい規格から ES5 に変換することで古いブラウザーでも最新規格を使えるようにできます。これをトランスパイルと呼びます。

Babel はこのトランスパイラーで有名なもののひとつです。


### Polyfill とは?
古いブラウザー向けに新しい ECMAScript の機能を提供するための方法の一つに Polyfill があります。

Polyfill はコード変換ではなく、関数やクラスを追加する方法で実現します。トランスパイルと比べるとできないことが多いです。

ここでは Babel のトランスパイルと Babel の Polyfill の両方を利用し、ECMAScript の最新機能を提供します。


## 準備
[babel-loader](https://github.com/babel/babel-loader) をインストールします。

```
npm install --save-dev babel-loader
```

この babel-loader を使うために [webpack.config.js](./webpack.config.js) ファイルに設定を追加します。

```javascript
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
```

babel-loader は webpack から Babel を呼び出すためのラッパーなので、Babel とそして Babel のプリセットを合わせてインストールします。

```
npm install --save-dev babel-core babel-preset-env
```

Babel の設定ファイル [.babelrc](./.babelrc) を書きます。

```json
{
  "presets": [
    "env"
  ]
}
```

Polyfill を有効にするために、インストールをし、[webpack.config.json](./webpack.config.js) ファイルを書き換えます。

```
npm install --save babel-polyfill
```

```javascript
  entry: [
    'babel-polyfill',
    './entry.js',
  ]
```


## 取り込む
折角ですので ES2017 で追加された async/await を使ってみましょう! (よくわからない方は、async/await が ES2017 の新機能で、使えないブラウザー用に Babel で ES5 に変換しているのがわかれば OK です)

[.babelrc](./.babelrc) に Babel の設定を書きましたけど、`webpack.config.js` に書く方法もあります。個人的には `.babelrc` おすすめです。


## 解説
webpack にはローダーという仕組みがあり、変換をしたうえでファイルを取り込むことができます。今回は [babel-loader](https://github.com/babel/babel-loader) を使いましたが、このローダーは[オフィシャルなものからアンオフィシャルなものまで]((https://webpack.js.org/loaders/))たくさんあります。必要に応じて自分で作ることもできます。

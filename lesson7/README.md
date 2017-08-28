# React を取り込む
ここまでは自分で書いた JavaScript/CSS ファイルを取り込みましたが、npmjs レジストリに登録されているライブラリ (今回は React) を取り込みます。


## 準備
React に必要なモジュールをインストールします。取り込むモジュールは `--save` オプションをつけてください。

```
npm install --save react react-dom
```

設定ファイル [webpack.config.js](./webpack.config.js) を書きます。

```javascript
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
```


## 取り込む
[entry.js](./entry.js) ファイルを用意します。

```javascript
import React from "react";
import ReactDOM from "react-dom";

class AppShell extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello, world!');
  }
}

ReactDOM.render(React.createElement(AppShell), document.querySelector('#container'));
```

[index.html](./index.html) ファイルを用意します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>React</title>
</head>
<body>
<div id="container"></div>

<script src="bundle.js"></script>
</body>
</html>
```

`webpack-dev-server --open` を実行してください。


## 解説
### npm モジュールと依存関係
React を実行するためには、React 以外にもたくさんのモジュールが必要になります。`npm install` は依存関係にあるモジュールを合わせてインストールし、webpack は依存関係にあるモジュールを取り込みます。

[React](https://www.npmjs.com/package/react) の Dependencies を見ると、いくつかのモジュールを要求することがわかります。webpack は React を含むこれらのモジュールの中から必要なファイルのみを取り込みます。(2.x から)


### `--save` と `--save-dev`
`npm install` の `--save と `--save-dev は違います。前者はアプリケーションで直接使うモジュールをインストールする場合、後者はアプリケーションを開発するモジュールをインストールする場合です。React はアプリケーションの実行に必要なため `--save` で、`babel-loader` などの開発の時だけ必要なものは `--save-dev` となります。
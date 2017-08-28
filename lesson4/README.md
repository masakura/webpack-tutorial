# JavaScript ファイルを取り込む!
ここまで `entry.js` ファイル一つしか使ってません! 全然面白くありません! というわけで、他の JavaScript ファイルを読み込みます。


## webpack のない世界
webpack がない場合、複数の JavaScript ファイルを使う時はこんな感じでした。

[index.html](./index.html)。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Lesson 4</title>
</head>
<body>
<script src="entry.js"></script>
<script src="sample.js"></script>
</body>
</html>
```

[entry.js](./entry.js)。

```javascript
document.write("It works.");
```

[sample.js](./sample.js)。

```javascript
document.write('Hello, sample!');
```

ブラウザーで開いてください。(面白くもなんともないと思いますが...)


## 準備
webpack を使う準備をします。

```javascript
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
```

webpack ではファイルを一つにまとめてますので、[index.html](./index.html) ファイルも bundle.js ファイルのみを読み込むよう書き換えます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Lesson 1</title>
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>
```


## 単純に読み込む
まずは単純に読み込むところから!

[entry.js](./entry.js) から [sample.js](./sample.js) を読み込むよう、[entry.js](./entry.js) ファイルを修正します。

```javascript
document.write("It works.");

import './sample.js';
```

`webpack-dev-server --open` を実行してください。

書き換える前と同じようにブラウザーに表示されました! (何も変わってなくて面白くないかもしれませんが、何も変わらないのがすごいところです)


## 関数のインポート
他の JavaScript ファイルを読み込めるようになりましたが、他の JavaScript ファイルで宣言されている関数を使うためにはもう一工夫必要です。

関数を含めたファイル [functions.js](./functions.js) ファイルを用意します。

```javascript
// functions.js
export default function someMethod () {
  return 'Hello!';
};
```

[entry.js](./entry.js) を修正して関数を使います。

```javascript
import someMethod from './functions.js';

document.write("It works.");

document.write(someMethod());
```

`export default` で関数を公開 (他の JavaScript からでも使えるように) し、`import` で公開された関数を取り込んで使えるようになります。


## クラスのインポート
関数のインポートと同じです。

[classes.js](./classes.js) ファイルを用意します。

```javascript
export default class SomeClass {
  someMethod () {
    return 'Hello!';
  }
};
```

[entry.js](./entry.js) ファイルを修正してクラスを使います。

```javascript
import SomeClass from './classes.js';

document.write("It works.");

const some = new SomeClass();
document.write(some.someMethod());
```


## おまけ
### import のファイルの指定
import で相対パスを使う場合は必ず `./` をつけてください。

```javascript
import './foo'; // このファイルと同じ場所にある foo.js ファイル
import './foo.js'; // このファイルと同じ場所にある foo.js ファイル
import 'foo'; // インストールされた foo モジュール (Lesson 7 でやります)
```


### 名前付きエクスポート
ここではデフォルトエクスポートという、一つのファイルにつき一つのエクスポートを使いました。名前を使うことで、複数のエクスポートができます。

```javascript
// exports.js
export const name = 'hoge';
export function someMethod() { return 'someMethod'; }
export class SomeClass {}
```

```javascript
import {*} from './export.js'; // すべて
import {name} from './exports.js'; // name だけ
import {aliasName as name} from './exports.js'; // name を aliasName にして
```

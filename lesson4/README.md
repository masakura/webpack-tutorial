# 他の JavaScript ファイルを読み込む
ここまで `entry.js` ファイル一つしか使ってません! 全然面白くありません! というわけで、他の JavaScript ファイルを読み込みます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Lesson 1</title>
</head>
<body>
<script src="entry.js"></script>
<script src="sample.js"></script>
</body>
</html>
```

```javascript
// entry.js
document.write("It works.");
```

```javascript
// sample.js
document.write('Hello, sample!');
```

まずは [index.html](./index.html) ファイルをブラウザーで開いてください。`JavaScript ファイル二つとも処理されています。


## 他のファイルを読み込む
webpack を使うと、JavaScript ファイルから他の JavaScript ファイルを読み込めるようになります。

```javascript
// entry.js
document.write("It works.");

import './sample.js';
```

index.html ファイルも修正します。

```html
<!-- <script src="entry.js"></script> -->
<!-- <script src="sample.js"></script> -->
<script src="bundle.js"></script>
```

`webpack-dev-server --open` を実行してください。

書き換える前と同じようにブラウザーに表示されました!

`import` を使って読み込むことができますが、相対パスを使う場合は `./` を忘れないようにしてください。


## 関数のインポート
他の JavaScript ファイルを読み込めるようになりましたが、他の JavaScript ファイルで宣言されている関数を使うためにはもう一工夫必要です。

```javascript
// functions.js
export default function someMethod () {
  return 'Hello!';
};
```

```javascript
// entry.js
import someMethod from './functions.js';

document.write("It works.");

document.write(someMethod());
```

`export default` で関数を公開 (他の JavaScript からでも使えるように) し、`import` で公開された関数を取り込みます。


## クラスのインポート
関数のインポートと同じです。

```javascript
// classes.js
export default class SomeClass {
  someMethod () {
    return 'Hello!';
  }
};
```

```javascript
// entry.js
import SomeClass from './classes.js';

document.write("It works.");

const some = new SomeClass();
document.write(some.someMethod());
```


## 名前付きエクスポート (参考)
今までの例ではデフォルトエクスポートという、一つのファイルにつき一つのエクスポートを使いました。名前を使うことで、複数のエクスポートができます。

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

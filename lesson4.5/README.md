# ES6 Modules とかスコープとか
`import` とか `export` とかをはじめて見た方も多いのではないでしょうか?

これらは webpack 独自のものではなく ES6 Modules と呼ばれる規格に含まれています。ブラウザーや Node.js での実装が少しずつ進んでいるので、もう少ししたらよく見るようになると思います。

## 恩恵
ES6 Modules の一番の恩恵は依存関係の解決が楽になることでしょう。

今までの script 要素を使った JavaScript ファイルの読み込みは依存関係を意識しなければならず、数が増えてくると非常に大変でした。

例えば以下の中に、`fuga.js` を使いつつ `buz.js` から使われる `piyo.js` ファイルをどこに書けばいいかすぐに分かるでしょうか?

```html
<script src="hoge.js"></script>
<script src="fuga.js"></script>
<script src="bar.js"></script>
<script src="buz.js"></script>
<script src="foo.js"></script>
```

また、誰かが書いた `hogehoge.js` がこれらの五つの JavaScript のうち、どれに依存されているか分かるでしょうか? さらに、`hogehoge.js` は他にいくつかの JavaScript ファイルを要求しているのかもしれません。

ES6 Modules では `import` を使うことで、使う JavaScript ファイルとその依存関係を辿ってインポートをしてくれます。


## スコープ
ES6 Modules はそれまでの ECMAScript とは異なり、スコープがあります。


```javascript
// a.js
var text = 'ajs';

displayA() {
  console.log(text);
}
```

```javascript
// b.js
var text = 'bjs';

displayB() {
  console.log(text);
}
```

```javascript
// c.js

displayA();
displayB();
```

```html
<!doctype html>
<html lang="ja">
<head>
</head>
<body>
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
</body>
</html>
```

これを実行すると、`bjs` が二回コンソールに出力されます。

これは、`text` 変数のスコープがグローバルスコープになっているからです。

ES6 Modules はファイルごとに別のスコープとなります。

```javascript
// a.js
var text = 'ajs';

export default displayA() {
  console.log(text);
}
```
```javascript
// b.js
var text = 'bjs';

export default displayB() {
  console.log(text);
}
```

```javascript
// c.js
import displayA from './a';
import displayB from './b';

displayA();
displayB();
```

```html
<!doctype html>
<html lang="ja">
<head>
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>
```

今度は `ajs` と `bjs` がそれぞれ表示されます。ファイルの単位でスコープがわかれている証拠です。

ES6 Modules ではファイルごとにスコープが分かれるため、関数を宣言するだけでは他から使うことができません。そのファイルの中だけで使える関数となります。ですので、`export` で他から使えるように公開する必要があります。

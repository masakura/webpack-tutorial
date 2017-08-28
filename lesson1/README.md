# インストールして使おう
最初の一歩です! 最初なので、インストールしてファイル一つだけを取り込みます。


## webpack のない世界
webpack を始める前に、今までの方法と比較するためにおさらいをします。

使う前に一度ブラウザーで [index.html](./index.html) ファイルを開いてください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Lesson 1</title>
</head>
<body>
<script src="entry.js"></script>
</body>
</html>
```

```javascript
document.write("It works.");
```

ブラウザーには `It works.` って表示されます。

なんてことはないですよね? これを webpack 化します。


## 準備
何はなくとも webpack のインストールから!

```
npm install -g webpack
```


## webpack のある世界
webpack で `entry.js` を取り込みます!

```
webpack ./entry.js bundle.js
```

[bundle.js](./bundle.js) ファイルが生成されていることを確認してください。

[index.html](./index.html) ファイルの `<script src="entry.js">` のファイル名を `bund.ejs` に変更します。

```html
<script src="bundle.js"></script>
```

ブラウザーをリロードすると、同じように `It works.` って表示されます。何も変化がなくて面白くないですね!


## 解説
webpack はたくさんの JavaScript やその他のファイルをまとめて取り込んでくれるれるものなので、JavaScript ファイル一つしかないこのレッスンはとてもつまらないです。

興味がある方は [bundle.js](./bundle.js) を見てみてください。ファイルの最後の方に見覚えのあるコードがありますね!

```javascript
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.write("It works.");


/***/ })
/******/ ]);
```

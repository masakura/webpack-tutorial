# インストールして使う
ここでは、webpack をインストールして使います。


## インストール
```
npm install -g webpack
```


## 使う
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

今度は webpack を使います。

```
webpack ./entry.js bundle.js
```

`bundle.js` ファイルが生成されています。html ファイルで読み込んでいる JavaScript ファイルを `entry.js` から `bundle.js` に書き換えてブラウザーをリロードしてください。

同じように `It works.` って表示されます。


## 終わりに
まだ一つの JavaScript ファイルしか使っていないのであまり面白くはありませんが、webpack が `entry.js` をバンドルして `bundle.js` が作られるのがわかると思います。

興味がある方は [bundle.js](./bundle.js) を見てみてください。
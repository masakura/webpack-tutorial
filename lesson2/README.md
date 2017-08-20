# 設定ファイル
コマンドライン引数をいちいち指定するのは面倒ではありませんか? しかもこれからどんどん引数が増えていきます。設定ファイルを使って楽をしましょう!

設定ファイルは JSON 形式でも書くことができますが、JavaScript ファイルとして書くことをお勧めします。JSON ではコメントを書くことができないのが大きな理由です。

```javascript
// webpack.config.js
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
```

[Lesson 1](../lesson1) と同じことを今度は引数なしでやります。

```
webpack
```

同じようにブラウザーで開いてみてください!

# watch と webpack-dev-server
JavaScript ファイルを保存するたびに `webpack` コマンドをたたくのはとても面倒です。その時に便利な、watch モードと、webpack-dev-server を使ってみます。


## watch モード
watch モードとは、ファイルの変更を検出して自動でビルドをするモードです。`webpack` コマンドは最初の一回だけで済みます。

```
webpack --watch
```

`--watch` すら面倒な人は `-w` をば!

```
webpack -w
```

[entry.js](./entry.js) ファイルを保存するたびにビルドが走るのがわかると思います。


## webpack-dev-server
watch モードは大変便利ですが、ブラウザーのリロードがめんどくさいという重大な問題があります。そういう時は webpack-dev-server の出番です。ブラウザーのリロードも勝手にやってくれます。

```
webpack-dev-server --open
```

ファイルを保存するだけで、ビルドされブラウザーのリロードまで自動でやってくれます! 超便利!

`--open` はデフォルトブラウザーを開く設定です。
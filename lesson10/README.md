# 最後に
webpack についてこういう風に考えている人もいます。

* webpack について知らなくても生きていける
* ES6 Modules がブラウザーに実装されれば webpack は不要になる

私はこの意見に対して反対します。

「webpack について知らなくても生きていける」のはたしかにそうなんです。Angular CLI や Vue CLI の登場により、自力で webpack.config.js ファイルを書く機会は減りました。いい感じのものを作ってくれるので知らなくてもいいというのはそのとおりです。

ただ、これらの自動生成される webpack.config.js ファイルも万能ではなく、Foundation や Bootstrap などを組み込んだり、買ってきたライブラリを組み込んだりなど、絶対に必要ないとは云い切れないと考えています。そういった時にになってから詳しく調べようとすると難しく、大体どんなかんじなのかはしっておくとよいでしょう。

「ES6 Modules がブラウザーに実装されれば」については JavaScript ファイルに限ってはそのとおりになる可能性があります。ES6 Modules と HTTP/2.0 が当たり前になれば事前に結合しておく必要がなくなるかもしれません

ですが、webpack は JavaScript だけでなく、CSS/画像などの他の形式のファイルも一括で扱えるようになっています。これらの部分は ES6 Modules が当たり前に使えるようになっても残ると考えています。


## おまけ
これを言うと殺されそうだけど...

webpack は他のプログラミング言語が当たり前にできることを提供しているだけっていう話もあります。

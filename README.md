# jsdo.it でお手軽 Grimoire.js プログラミング

・自己紹介
  はじめまして。cx20（しーえっくすにじゅう）と申します。
  http://jsdo.it/cx20
  職業：プログラマ。仕事だと VC++ とか SQL Server が多いです。Web の知識には疎いです。
  趣味：色んな言語で「Hello, World!」を書くこと（http://cx20.main.jp/blog/hello/language-table/）
        最近は色んな WebGL ライブラリを試すことを趣味にしています（http://qiita.com/cx20/items/0fa19c96aa6470d98807）

# jsdo.it とは？

・jsdo.it とは
  Kayac さんの作成した JavaScript 投稿サイト。昨年より運営が jsdo.it 株式会社に変わりました。
  他にも JavaScript 投稿サイトはあるが、何故、jsdo.it なのか？
  → リソース（テクスチャやシェーダ等）がアップロード可能な為。
     外部サイトのリソースを参照することも出来なくはないが、クロスドメインの制約でいろいろと面倒なので。。。
・フォークすることで手軽に派生バージョンを作成させることが出来る
・フォークツリーや Diff 機能を用いると手軽に相違点を確認することが出来る

# jsdo.it を使ってみる

＜三角形のサンプルをフォークする方法＞
基本的なサンプルをベースにフォークしたい場合は、以下からサンプルを探すことが出来ます。
Grimoire.js だけでなく Three.js や Babylon.js といった他の WebGL サンプルもありますので興味のある方はどうぞ。

1. Google より「WebGL」「ライブラリ比較」で検索。
   → http://qiita.com/cx20/items/0fa19c96aa6470d98807 にアクセス
      各種 WebGL ライブラリによる基本図形の描画サンプルになります。
    各ライブラリ毎に「三角形」「四角形」「立方体」「テクスチャ付き立方体」のサンプルを用意しています。

2. 「VBO」サンプルと「プリミティブ図形」の２通りあります。
   「VBO」は「頂点バッファオブジェクト」の略で、自前で頂点データを用意するサンプルになります。シェーダも自前のシェーダを使用しています。
   「プリミティブ図形」は WebGL のライブラリにより頂点データが用意されているサンプルになります。シェーダはライブラリ組み込みのシェーダを使用しています。
   今回は、お気楽コースとして「プリミティブ図形」のサンプルを使用したいと思います。

3. 「Grimoire.js」の「プリミティブ図形」サンプルのうち「三角形」のサンプルを表示します。
    ■ [WebGL] Grimoire.js を試してみるテスト
    http://jsdo.it/cx20/4ZEB

4. 「Fork」ボタンをクリックすると新しい作品ができます。

5. 試しに色を変えてみます。
   material の color="#00f" を "#f00" にすると色が「青」→「赤」に変わります。

＜サッカーボールのサンプルをベースに地球のサンプルを作成する方法＞
1. サッカーボールのサンプルを表示する
   [WebGL] Grimoire.js でサッカーボールを表示させてみるテスト
   http://jsdo.it/cx20/qgAL

2. Fork ボタンをクリックし新しい作品を作成
   [WebGL] Grimoire.js で地球を表示させてみるテスト
   http://jsdo.it/cx20/Iwed
   
  ＜変更点＞
  ・カメラの位置を調整
    → camera の position="0,0,5" を "0,0,3" に変更
  ・サッカーボールを地球に変更
    → mesh の texture を football.png から earth.jpg に変更する（リソースは jsrun.it のものを使用）
  ・Rotate コンポーネントの回転方向を調整（横回転のみとするよう変更）
    → JS のコードを修正「this.node.setAttribute('rotation',0 + ',' + this.phi + ',' + 0);」
  ・Rotate コンポーネントを JS で動的に追加するよう対応
    → JS のコードに「$$('mesh').addComponent('Rotate');」を追加

3. Fork ボタンをクリックし新しい作品を作成
   [WebGL] [WebGL] Grimoire.js で地球と雲を表示させてみるテスト
   http://jsdo.it/cx20/SprK
  
  ＜変更点＞
  ・雲を追加
    mesh「cloud」を追加。texture として cloud.png を指定（リソースは jsrun.it のものを使用）
  ・雲のスケールを地球の1.01倍に変更（同じサイズだと重なってしまい正しく表示されない為）
    <mesh id="earth" position="0,0,0" geometry="sphere" scale="1.00" texture="http://jsrun.it/assets/U/L/K/7/ULK7v.jpg"/> <!-- earth.jpg -->
    <mesh id="cloud" position="0,0,0" geometry="sphere" scale="1.01" texture="http://jsrun.it/assets/M/d/h/b/Mdhb8.png"/> <!-- cloud.png -->
  ・地球と雲をそれぞれ異なるスピードで回転させるよう対応
    $$('#earth').addComponent('Rotate').setAttribute('speed', 0.5);
    $$('#cloud').addComponent('Rotate').setAttribute('speed', 0.7);

# jsdo.it に投稿したサンプルの紹介

Grimoire.js サンプル一覧
http://jsdo.it/tag/Grimoire.js


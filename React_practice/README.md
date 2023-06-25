# 概要
このディレクトリは、webpack, react, babelを用いて、Reactの環境構築を行う最小限のプロジェクトです

# ダウンロード
1. git をインストールします。
2. 以下のいずれかのコマンドを実行します。  
   - **コマンドプロンプト**
      ```bat
      git svn clone https://github.com/Unico417/practice/trunk/React_practice && cd React_practice && rmdir /s /q .\\.git && npm install && cd ../
      ```
   - **Powershell**
      ```bat
      git svn clone https://github.com/Unico417/practice/trunk/React_practice; cd React_practice; Remove-Item -Recurse -Force .git; npm install; cd ../
      ```

# ビルド
1. `npm run build`で、src配下のソースをがっちゃんこ＆トランスパイルを行います
2. index.htmlで、出力されたファイルが実行されます。

# 参考
- Zenn 「webpackでJS,React×JS,React×TSの開発環境を1から構築してみた」  
  https://zenn.dev/spacemarket/articles/23e5401a074ccc
- ICS MEDIA 「最新版で学ぶwebpack 5入門 JavaScriptのモジュールバンドラ」  
  https://ics.media/entry/12140/

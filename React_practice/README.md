# 概要
このディレクトリは、webpack, react, babelを用いて、Reactの環境構築を行う最小限のプロジェクトです

# 使用方況
1. 以下のコマンドを利用して、このディレクトリを取得します
   ```bat
   git svn clone https://github.com/Unico417/practice/trunk/React_practice && rmdir /s /q .\\React_practice\\.git
   ```
3. `npm install`で、node_modules/を復元します
4. `npm run build`で、src配下のソースをがっちゃんこ＆トランスパイルを行います
5. index.htmlを開きます

# webpackのエントリーポイント・出力先
webpack.config.jsに定義されており、変更可能です

# 参考
- Zenn「webpackでJS,React×JS,React×TSの開発環境を1から構築してみた」  
    https://zenn.dev/spacemarket/articles/23e5401a074ccc

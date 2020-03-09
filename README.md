## Babel トランスコンパイラー

### Node.jsをインストール

### プロジェクト作成

  $ npm init -y   // -y 設定ファイルpackage.jsonをすべて規定値で設定する

### Babelをインストール

  // babel-envはES2015(ES6)以降のコードをトランスコンパイルするためのプリセット
  $ npm install --save-dev @babel/core @babel/cli @babel/preset-env

### エイリアスを登録する

```package.json
"name":"part6",
"scripts": {
  "build":"babel src -d dist --presets=@babel/preset-env"   // babel -w でwatch更新
}
```

### 実行

  $ npm run build




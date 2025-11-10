# create-mitarashi-app

Mitarashiプロジェクトを一発で構築するCLIツールです。

## 使い方

```bash
npx create-mitarashi-app my-blog
cd my-blog
npm install
npm run dev
```

または、グローバルインストール:

```bash
npm install -g create-mitarashi-app
create-mitarashi-app my-blog
```

## 生成されるプロジェクト構造

```
my-blog/
├── posts/
│   └── welcome.md
├── templates/
│   ├── layout.html
│   ├── post.html
│   └── index.html
├── mitarashi.config.ts
├── package.json
└── .gitignore
```

## コマンド

- `npm run build` - サイトをビルドして `dist/` に出力
- `npm run dev` - 開発サーバーを起動

## 詳細

詳しくは [Mitarashiのドキュメント](https://github.com/PocoPota/mitarashi) をご覧ください。

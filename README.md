# create-mitarashi-app

[Mitarashi](https://github.com/PocoPota/mitarashi) プロジェクトを一発で構築するCLIスキャフォールディングツールです。
テンプレート・設定ファイル・サンプル記事を含むプロジェクトを即座に生成します。

## 使い方

```bash
npx create-mitarashi-app my-blog
cd my-blog
npm install
npm run build
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
│   └── welcome.md              # サンプル記事
├── templates/
│   ├── layout.html             # 共通レイアウトテンプレート
│   ├── post.html               # 記事テンプレート
│   └── index.html              # トップページテンプレート
├── mitarashi.config.ts         # サイト設定ファイル
├── mitarashi.syntax.json       # カスタム構文定義
├── package.json
└── .gitignore
```

### 生成されるファイルの詳細

#### `mitarashi.config.ts`

サイトのタイトル、ディレクトリパス、テンプレート設定などが事前に構成済みです。

```typescript
import { defineConfig } from "mitarashi";

export default defineConfig({
  site: {
    siteTitle: "My Blog",
    description: "mitarashiで作ったブログ",
    baseUrl: "/",
  },
  paths: {
    postsDir: "posts",
    outputDir: "dist",
    templateDir: "templates",
    customSyntaxFile: "mitarashi.syntax.json",
  },
  theme: {
    layout: "layout.html",
    post: "post.html",
  },
  options: {
    cleanOutputDir: true,
  },
});
```

#### `mitarashi.syntax.json`

カスタム構文のサンプル定義が含まれています。黄色マーカー・コメントブロック・情報ブロックの3つのルールがすぐに使えます。

#### `posts/welcome.md`

Front Matter付きのサンプル記事です。カスタム構文の使用例も含まれています。

#### `templates/`

スタイル付きのHTMLテンプレート一式です。そのまま使うことも、カスタマイズすることもできます。

## コマンド

生成されたプロジェクトでは以下のスクリプトが利用できます。

| コマンド | 説明 |
|----------|------|
| `npm run build` | サイトをビルドして `dist/` に出力 |

## 詳細

Mitarashiの設定・テンプレート・カスタム構文などの詳しい情報は [Mitarashi のドキュメント](https://github.com/PocoPota/mitarashi) をご覧ください。


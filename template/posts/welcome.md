---
title: "Mitarashiへようこそ"
date: "2025-11-09"
---

# Mitarashiへようこそ

Mitarashiは、シンプルで使いやすい静的サイトジェネレーターです。

## 使い方

### 新しい記事を書く

`posts/`ディレクトリに新しいMarkdownファイルを作成してください。

```markdown
---
title: "記事のタイトル"
date: "2025-11-09"
---

# 見出し

ここに本文を書きます。
```

### サイトをビルドする

```bash
npm run build
```

### 開発サーバーを起動する

```bash
npm run dev
```

## カスタマイズ

- `mitarashi.config.ts`: サイトの設定
- `templates/`: HTMLテンプレート
- `posts/`: ブログ記事

詳しくは[ドキュメント](https://github.com/PocoPota/mitarashi)をご覧ください。

#!/usr/bin/env node

import { existsSync, mkdirSync, cpSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createMitarashiApp() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.error("エラー: プロジェクト名を指定してください。");
    console.log("使い方: npx create-mitarashi-app <project-name>");
    process.exit(1);
  }

  const projectPath = resolve(process.cwd(), projectName);

  // プロジェクトディレクトリが既に存在する場合はエラー
  if (existsSync(projectPath)) {
    console.error(`エラー: ディレクトリ "${projectName}" は既に存在します。`);
    process.exit(1);
  }

  console.log(`\n🍡 Mitarashiプロジェクトを作成しています...`);
  console.log(`🍡 場所: ${projectPath}\n`);

  // プロジェクトディレクトリを作成
  mkdirSync(projectPath, { recursive: true });

  // テンプレートのパスを取得
  const templatePath = join(__dirname, "..", "template");

  // テンプレートをコピー
  try {
    cpSync(templatePath, projectPath, { recursive: true });
    console.log("🍡 テンプレートファイルをコピーしました");
  } catch (error) {
    console.error("エラー: テンプレートのコピーに失敗しました", error);
    process.exit(1);
  }

  // package.jsonを作成
  const packageJson = {
    name: projectName,
    version: "0.1.0",
    type: "module",
    scripts: {
      build: "mitarashi",
    },
    dependencies: {
      mitarashi: "^0.1.0",
    },
  };

  writeFileSync(
    join(projectPath, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
  console.log("🍡 package.jsonを作成しました");

  // 完了メッセージ
  console.log(`\n🍡 プロジェクトの作成が完了しました！\n`);
  console.log(`次のコマンドを実行してください:\n`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm install`);
  console.log(`  npm run build\n`);
  console.log(`ドキュメント: https://github.com/PocoPota/mitarashi\n`);
}

createMitarashiApp();

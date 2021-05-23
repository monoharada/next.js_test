# next.js_test

変なものは書いてないので一旦 public 状態にしてます。

next.js+typescript+tailwindcss+storybook

hosting with varcel

husky で pre-commit を hook に lint とフォーマットを通る

main ブランチで push すると github actions 経由で varcel にデプロイ

ローカルで作成せずすべて gitpod 上で構築しました～

## app

https://next-js-test-nine-lyart.vercel.app/

other ページを追加した以外ほとんどコーディングはしていないちょっとだけ tailwind で書いた

## storybook

https://next-js-test-sb.vercel.app/

初期のボタンを tailwind で上書き

## 課題

現状の構成だと basic 認証が掛けられない
app と storybook でホスト先を分けるなど工夫が必要

tsx を pug で書きたいがハードル高い。。

# next.js_test

変なものは書いてないので一旦public状態にしてます。

next.js+typescript+tailwindcss+storybook

hosting with varcel

huskyでpre-commitをhookにlintとフォーマットを通る

mainブランチでpushするとgithub actions経由でvarcelにデプロイ

ローカルで作成せずすべてgitpod上で構築しました～

## app
https://next-js-test-nine-lyart.vercel.app/

other ページを追加した以外ほとんどコーディングはしていないちょっとだけtailwindで書いた

## storybook
https://next-js-test-sb.vercel.app/

初期のボタンをtailwindで上書き

## 課題
現状の構成だとbasic認証が掛けられない
appとstorybookでホスト先を分けるなど工夫が必要

tsxをpugで書きたいがハードル高い。。

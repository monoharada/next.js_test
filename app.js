import protect from 'static-auth'
import safeCompare from 'safe-compare'

const USER_NAME = process.env.USER_NAME || 'admin' // プロジェクトの環境変数を設定していた場合はそちらを適用させる
const PASSWORD = process.env.PASSWORD || 'admin'

const app = protect(
  '/',
  (username, password) => safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD), // timing attack 対策
  {
    directory: `${__dirname}/build`, // build 配下のファイルを静的コンテンツとして配信する
    onAuthFailed: (res) => {
      res.end('Authentication failed')
    },
  }
)

module.exports = app

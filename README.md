## 環境構築手順
### ０.Node.jsをPCにインストールしよう
- ググって下さい。
### １.npx create-next-appコマンドでNext.js+Webサーバを立てよう

1. 適当なディレクトリを作成し、その配下で「npx create-next-app」コマンド実行。

2. package.jsonのあるappディレクトリまで遷移し「npm run dev」実行。

   ```
   npm run dev
   ```

3. ブラウザでhttp://localhost:3000/にアクセスし、Next.jsの画面が表示されていることを確認。

4. 確認できたら「ctrl + c」で一旦停止して再度3000ポートを確認しサーバが上がっていない事を確認。

### ２.docker化しよう:whale:

1. （この工程は不要かも）dockerfileとdocker-compose.ymlファイルを「npx create-next-app」を実行したことによって作成されたファイル配下に格納する。ちなみにWSL環境のubuntuのコマンドラインに「code」と入力しvscodeを立ち上げることによってwslのファイル書き込み権限がある状態で開けるので必ずこの方法で開く。

   ```
   app-
       |-next
       |-pages
       |-public
       |-styles
       |-.eslintrc
       |-.gitignge-lock.json
       |-pakage.json
       |-etc...
       |-ここに格納
   ```

2. 「~/react-app/next-docker-sns/sns$」 配下に移動し「docker-compose up -d --build」を実行しdockerのイメージ、コンテナ作成と同時にコンテナを起動させる。

3. 「http://localhost:3000/」にアクセスし画面にSNSのホーム画面が表示されていればdocker化完了。

### DBの構造（SQLite）
- User
  - id

### MEMO
- サーバサイドのログ確認「docker-compose logs web」
- コンテナに入る「docker exec -it コンテナ名 sh」
- sqlite起動「sqlite3 ファイルネーム」「sqlite rootpass/db/nextSns.db」
- sqlite終了「.exitもしくは.quit」
- テーブルの構造確認「.schema」


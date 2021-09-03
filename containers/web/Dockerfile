# DockerfileとはDockerがイメージを構築するときに読み込むファイルです。

# FROM	     ベースイメージを指定する。これを元にその他命令を追加していくため、最初はFROMから記述する必要がある。DockerHubにあるイメージを使用。
# LABEL	     イメージに、ベンダ名、作者名、バージョン情報などのラベル情報(メタデータ)を設定します。
# ENV	     永続的な環境変数を設定します。
# RUN	     それまでのイメージをベースに、新規レイヤーでシェルコマンドを実行する。実行後出来たイメージは、以降の命令にも適用される。 パッケージをコンテナにインストールするために使用されます。
# COPY	     ホストからコンテナイメージにファイルやディレクトリをコピーします。
# ADD	     ホストからコンテナイメージにファイルやディレクトリをコピーします。
# CMD	     docker run時にデフォルトで実行するコマンドを指定することが出来る。１つのDockerfileに１つしか含めることが出来ない。※ 複数記載されている場合、最後の1個が実行される。
# WORKDIR	 あとに続く説明の作業ディレクトリを設定します。 （RUN, CMD, ENTRYPOINT, COPY, ADD, docker run, exec で実行するコンテナプロセスのワークディレクトリを指定します。）
# ARG	     Dockerfile 内で使用できる変数を指定します。ENV による環境変数がコマンドやコマンドのサブプロセスに引き継がれるのに対し、ARG による変数は Dockerfile の中のみで使用できます。
# ENTRYPOINT docker run時にデフォルトで実行するコマンドを指定することが出来る。１つのDockerfileに１つしか含めることが出来ない。CMDと片方しか使えない。CMDとの違いはググろう。
# EXPOSE	 ポートを公開します。
# VOLUME	 永続データにアクセスして保存するためのディレクトリマウントポイントを作成します。
# 参考：https://www.tohoho-web.com/docker/dockerfile.html

FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install react-bootstrap bootstrap 
RUN npm install react-icons
RUN npm install sqlite sqlite3
# DBとのやり取りのためのfetchコンポーネント利用のため
RUN npm install isomorphic-unfetch
# idをユニークで作成するためにuuidライブラリ利用のため
RUN npm install uuid
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
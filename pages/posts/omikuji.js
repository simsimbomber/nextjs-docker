import Link from 'next/link'
import Head from 'next/head'

const Omikuji = () => {
    return (
    <>
      　<Head>
          <title>ログイン</title>
          <meta name="description" content="LoginPage" author="Y.S" />
          <link rel="icon" href="/images/favicon.ico" />
      　</Head>
        <h1>Login　Page</h1>
        <h2>
            <Link href="/">
                <a>ホームに戻る</a>
            </Link>
        </h2>
    </>
    )
}

export default Omikuji;
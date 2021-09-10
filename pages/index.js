import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link'
import { useEffect } from 'react';

export default function Home() {

  // useEffect() の実行はブラウザ上でのみ限定され、SSRやSSGのタイミングでは実行されないのでこうしないとsessionStrageがうまく設定できない
  useEffect(() => {
    // セッションストレージを空で作成（ログイン状態の保持などで使うため）
    if(!sessionStorage.getItem('userID')) { // セッションストレージ存在チェック
      sessionStorage.setItem('userID', ''); // key:userIDでvalueが空のセッションストレージ作成
    }
  }, []);
  
  return (
    <div >
      <Head>
        <title>Next.jsでSNSを作ろう/SNS</title>
        <meta name="description" content="Create SNS For Next.js" author="Y.S" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div className={styles.inlineBlock}>
      <Image src="/images/twitter_icon.png" alt="ログインページに表示するSNSイメージ画像" width={800} height={870} />        
      </div>
      
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">SNS!</a>
        </h1>
        <Button href="/posts/createAccount" variant="outline-primary" style={{width: 300, marginTop: 30}}>
          アカウント作成
        </Button>
        <p>アカウントをお持ちの場合は<Link href="/posts/login" style={{color:'#0070f3'}}>ログイン</Link></p>
        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="/posts/omikuji/mainView"
            className={styles.card}
          >
            <h2>おみくじ &rarr;</h2>
            <p>Let's decide your fortune! <br></br>Good luck or bad luck? </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

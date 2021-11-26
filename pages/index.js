import Head from 'next/head'
import Image from 'next/image'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link'
import { useEffect } from 'react';
import FooterSns from '../components/footerSns';

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
      <div>
        <div style={styles.container_parent}>
          <div container_child_left>
            <img src="/images/test2.png" alt="ログインページに表示するSNSイメージ画像" layout='fill' />
          </div>
          <div style={styles.container_child_right}>
            <main style={styles.main}>
              <h1 style={styles.title}>
                Welcome to <a href="https://nextjs.org">SNS!</a>
              </h1>
              <Button href="/posts/createAccount" variant="outline-primary" style={{width: 300, marginTop: 30}}>
                アカウント作成
              </Button>
              <p>アカウントをお持ちの場合は<Link href="/posts/login" style={{color:'#0070f3'}}>ログイン</Link></p>
              <div style={styles.grid}>
                <a href="https://nextjs.org/docs" style={styles.card}>
                  <h2>Documentation &rarr;</h2>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>
                <a href="https://nextjs.org/learn" style={styles.card}>
                  <h2>Learn &rarr;</h2>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>
                <a href="https://github.com/vercel/next.js/tree/master/examples" style={styles.card}>
                  <h2>Examples &rarr;</h2>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>
                <a href="/posts/omikuji/mainView" style={styles.card}>
                  <h2>おみくじ &rarr;</h2>
                  <p>Let's decide your fortune! <br></br>Good luck or bad luck? </p>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div style={styles.footer}>
        <FooterSns/>
      </div>
    </div>
    
  )
}

// CSS in Js
const styles = {
  container_parent: {
    minHeight: '95vh',
    display: 'flex',
  },
  container_child_left: {
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    width:'50%',
    backgroundImage: 'url(public/images/test2.png)',
  },
  container_child_right: {
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    width:'50%',
    borderLeft: 'solid 2px grey',
  },
  footer: {
    minHeight: '5vh',
    display: 'flex',
    flexDiretion: 'row',
  },
  main: {
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '0',
    lineHeight: '1.15',
    fontSize: '4rem',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidtTop: '3rem',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '45%',
  },
  // image: {
  //   back
  //   width:'100%',
  //   maxWidth: '100%',
  //   height: 'auto',
  // }
};

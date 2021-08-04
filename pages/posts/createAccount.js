import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, } from 'react-bootstrap';

const CreateAccount = () => {
    return (
    <>
        <Head>
          <title>アカウント作成</title>
          <meta name="description" content="createAccount" author="Y.S" />
        <link rel="icon" href="/images/favicon.ico" />
      　</Head>
        <div style={styles.container}>
            <div style={styles.main}>
                <main>
                    <div className="fs-2">アカウントを作成</div><br></br>
                    <span className="fs-6">ユーザ名</span>
                        <InputGroup className="mb-3">
                            <FormControl 
                                placeholder="半角英数字12文字以上で入力して下さい"
                                aria-label="Username"
                                aria-describedby="basic-addon1">
                            </FormControl>
                        </InputGroup>
                    <span className="fs-6">メールアドレス</span>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="メールアドレスを入力して下さい"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    <span className="fs-6">パスワード</span>
                        <InputGroup className="mb-3">
                            <FormControl
                                className="col-xs-2"
                                placeholder="半角英数字12文字以上で入力して下さい"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    <Link href="/" className="fs-6">
                        <a>ホームに戻る</a>
                    </Link>
                </main>
                <div style={styles.footer}>
                    <footer>
                        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                            Powered by{' '}
                            <span className={styles.logo}>
                                <Image src="/../../public/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                            </span>
                        </a>
                    </footer>
                </div>
            </div>
        </div> 
    </>
    )
}

export default CreateAccount;

// CSS in Js
const styles = {
    container: {
        minHeight: '100vh',
        padding: '0 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
      
      main: {
        padding: '5rem 0',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footer: {
        width: '100%',
        height: '100px',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
};

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Login = () => {
    return (
    <>
    <Head>
        <title>ログインページ</title>
        <meta name="description" content="Login Page" author="Y.S" />
        <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <div style={styles.container}> 
        <div style={styles.distortedCircle}></div>
        <div className="fs-2" style={styles.center}>SNSにログイン</div><br></br>
        <span className="fs-6">ユーザ名</span>
        <InputGroup className="mb-3" style={{width:400}}>
            <FormControl 
                placeholder="半角英数字6文字以上で入力して下さい"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{width:150}}>
            </FormControl>
        </InputGroup>
        <span className="fs-6" style={{textAlign:"left"}}>パスワード</span>
        <InputGroup className="mb-3" style={{width:400}}>
            <FormControl
                className="col-xs-2"
                placeholder="半角英数字6文字以上で入力して下さい"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
        <Button href="./mainView" variant="outline-primary"style={{width:150}}>ログイン</Button><br></br>
        <div style={{textAlign:'center'}}>
            <Link href="/" className="fs-6">
                <a>ホームに戻る</a>
            </Link>
        </div>
    </div> 

    <div style={styles.footer}>
        <footer>
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    </div>
    </>
    )
}

export default Login;

// CSS in Js
const styles = {
    container: {
        minHeight: '90vh',
        //padding: '0 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //background: 'skyblue'
        //height: '100vh',
      },
      
      center: {
        // padding: '5rem 0',
        // flex: '1',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        //background: 'skyblue',
        alignItems: 'center'
      },

      left: {
        alignItems: 'left'
      },

      footer: {
        width: '100%',
        height: '10vh',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      square: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'red',
      },
      distortedCircle: {
        width:500, 
        height:500,
        borderRadius:'50% 50% 50% 70%/50% 50% 70% 60%', 
        background:'skyblue', 
        position:'absolute',
        zIndex:'-1'
      }
};

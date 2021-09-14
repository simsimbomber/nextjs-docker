import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import HeaderSns from '../../components/headerSns';
import FooterSns from '../../components/footerSns';

const successCreateAccount = () => {

    return (
    <>
    <Head>
        <title>アカウント作成成功</title>
        <meta name='description' content='SuccessCreateAccount' author='Y.S' />
        <link rel='icon' href='/images/favicon.ico' />
    </Head>
    <HeaderSns />
    <div style={styles.container}> 
        <div style={styles.distortedCircle}></div>
        <div className='fs-2' style={styles.center}>アカウントを作成しました</div><br></br>
        
        <Button variant='outline-primary'style={{width:150}} onClick={() => (window.location.href = 'http://localhost:3000/posts/login')}>ログイン</Button><br></br>
        <div style={{textAlign:'center'}}>
            <Link href='/' className='fs-6'>
                <a>ホームに戻る</a>
            </Link>
        </div>
    </div> 
    <FooterSns />
    </>
    )
}

export default successCreateAccount;

// CSS in Js
const styles = {
    container: {
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      center: {
        alignItems: 'center'
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
        width:700, 
        height:700,
        borderRadius:'50% 50% 50% 70%/50% 50% 70% 60%', 
        background:'skyblue', 
        position:'absolute',
        zIndex:'-1'
      }
};

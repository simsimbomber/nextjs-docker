import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import FooterSns from '../../components/footerSns';
import { useEffect } from 'react';

const Logout = () => {
  // セッションストレージからuserIDを削除
  useEffect(() => {
    // セッションストレージを空で作成（ログイン状態の保持などで使うため）
    if(sessionStorage.getItem('userID')) { // セッションストレージ存在チェック
      sessionStorage.removeItem('userID'); // key:userIDのセッションストレージ削除
    }
  }, []);


  return (
    <>
    <Head>
        <title>ログアウト成功</title>
        <meta name='description' content='SuccessLogout' author='Y.S' />
        <link rel='icon' href='/images/favicon.ico' />
    </Head>
    <div style={styles.container}> 
        <div style={styles.distortedCircle}></div>
        <div className='fs-2' style={styles.center}>ログアウトしました</div><br></br>
        <Button variant='outline-primary'style={{width:150}} onClick={() => (window.location.href = '/')}>ホームに戻る</Button><br></br>
    </div> 
    <FooterSns />
    </>
  );
}

export default Logout;

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
      distortedCircle: {
        width:700, 
        height:700,
        borderRadius:'50% 50% 50% 70%/50% 50% 70% 60%', 
        background:'skyblue', 
        position:'absolute',
        zIndex:'-1'
      }
};

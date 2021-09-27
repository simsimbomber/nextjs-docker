import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import ErrorMessage from '../../components/errorMessage';
import FooterSns from '../../components/footerSns';

import React, { useState } from 'react';
const SessionLost = () => {

    // エラーメッセージのstate
    const [displayMessageFlg, setDisplayMessageFlg] = useState(false);

    // DBからユーザデータを全て取得
    const getAllUserData = async() => {
        const res = await fetch('http://localhost:3000/api/user',{method:'GET'});
        const datas = await res.json();
        return datas.data;
    }

    // マイページボタンを押した時のアクション
    const transitionMyPage = async() => {
        // DBを確認し、入力したユーザ名、PWと一致するデータの存在を確認しbooleanで返す
        const [uniqueAccountFlg, uuid] = await checkExistedAccount(); // アカウント存在フラグとuuidを取得

        // DBにアカウントが確認できたらマイページへ遷移する
        if (uniqueAccountFlg) {
            // セッションストレージへIDを保存（ログイン状態を保持するため）
            sessionStorage.setItem('userID',uuid);
            // マイページへ遷移(動的ルーティング)
            window.location.href = `http://localhost:3000/posts/myPage/${uuid}`; 
        } else {
            // アラート表示
            //alert('入力されたメールアドレスやパスワードが正しくありません。\n確認してからやりなおしてください。');
            setDisplayMessageFlg(true);
        }
    }

    // DBを確認し入力したユーザ名、PWと一致するデータの存在を確認しbooleanで返す
    const checkExistedAccount = async() => {
        // 入力したユーザ名、PWを取得
        const inputMail = document.getElementById('mail_address').value;
        const inputPw   = document.getElementById('pw').value;

        console.log(inputMail,inputPw);
        // DBからUserテーブルのデータを全て取得
        const allUserData = await getAllUserData();

        // DBのデータとの一致を確認し結果を返す
        let uniqueAccountFlg = false; // ユニークアカウントフラグ
        let uuid = ''; // id
        for (const userData of allUserData) {
            // メアドとPWの一致を確認
            if (inputMail　==　userData.mail_address && inputPw　==　userData.password) {
                console.log('メアドとPWがDBと一致しました');
                uuid = userData.id; // idを取得
                uniqueAccountFlg = true; // ユニークアカウントフラグを上げる   
                break;// DBの構造上メールアドレスはユニークなため、見つかった時点で処理終了させる（不可軽減のため）
            }
        }
        return [uniqueAccountFlg, uuid];
    }
    
    return (
    <>
    <Head>
        <title>セッション情報がない際のページ</title>
        <meta name='description' content='SessionLost Page' author='Y.S' />
        <link rel='icon' href='/images/favicon.ico' />
    </Head>
    <div style={styles.container}> 
        <div style={styles.distortedCircle}></div>
        <Image src="/images/twitter_logo.png" alt="twitterのロゴ" width={150} height={50} />        
        <div className='fs-4' style={styles.center}>セッション切れです。再度ログインして下さい。
        </div><br></br>
        <span className='fs-6'>メールアドレス</span>
        <InputGroup className='mb-3' style={{width:400}}>
            <FormControl 
           　　 id='mail_address' 
                placeholder='メールアドレスを入力して下さい'
                aria-label='Username'
                aria-describedby='basic-addon1'
                style={{width:150}}>
            </FormControl>
        </InputGroup>
        <span className='fs-6' style={{textAlign:'left'}}>パスワード</span>
        <InputGroup className='mb-3' style={{width:400}}>
            <FormControl
                id = 'pw'
                className='col-xs-2'
                placeholder='半角英数字6文字以上16文字以下で入力して下さい'
                aria-label='Username'
                aria-describedby='basic-addon1'
            />
        </InputGroup>
        <Button variant='outline-primary'style={{width:150}} onClick={() => transitionMyPage()}>ログイン</Button><br></br>
        <ErrorMessage displayFlg={displayMessageFlg} message='入力されたメールアドレスやパスワードが正しくありません。確認してからやりなおしてください。' />

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

export default SessionLost;

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
        background:'#add8e6', 
        position:'absolute',
        zIndex:'-1'
      },
      
};

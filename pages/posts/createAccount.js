import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'isomorphic-unfetch';
import FooterSns from '../../components/footerSns';


const CreateAccount = () => {
    // DBからユーザデータを全て取得
    const getAllUserData = async() => {
        const res = await fetch('http://localhost:3000/api/user',{method:'GET'});
        const datas = await res.json();
        return datas.data;
    }
    
    // 入力値の整合性チェック
    const checkFormatValue = (id, regularExpressions) => {
        let FormatFlg = false;
        const inputValue = document.getElementById(id).value;
        const result = inputValue.match(regularExpressions);
        // フォーマットが正しくなければresultの値にnullが返るためそれをキーにフォーマットの整合性を判定
        if (result === null) {
            FormatFlg = true;
        }
        return FormatFlg;
    }

    // 文字数が６文字以上１６文字以下かどうかチェック
    const checkWordCountValue = (id) => {
        let wordCountFlg = false;
        const inputValue = document.getElementById(id).value;　// 入力したIDデータ取得
        const minWord = 6; // 最小値
        const maxWord = 16;　// 最大値

        if (inputValue.length < minWord || maxWord < inputValue.length) {
            wordCountFlg = true;
        }
        return wordCountFlg;
    }

    // メールアドレスの重複チェック
    const checkDuplicateMail = async() => {
        // 入力したメールの値を取得
        const inputMail = document.getElementById('mail_address').value;
        
        // DBからUserテーブルのデータを全て取得
        const allUserData = await getAllUserData(); // DBのUserテーブルからデータを全取得
        let duplicateMailFlg = false; // 重複アドレスフラグ
        for (const userData of allUserData) {
            console.log(userData);
            if (inputMail　==　userData.mail_address) {
                duplicateMailFlg = true; // 重複IDフラグを上げる       
                break;      
            }
        }
        return duplicateMailFlg;
    }

    // 再入力したパスワードの値との一致を確認
    const checkMatchPw = () => {
        let matchPwFlg = false; 
        const inputPw = document.getElementById('pw').value; // パスワード
        const inputPwAgain = document.getElementById('pw_again').value; // 再入力パスワード

        if (inputPw !== inputPwAgain) {
            matchPwFlg = true;
        }
        return matchPwFlg;
    }

    // // 入力した値をDBに格納
    const saveDatabase = async (createdUuid) => {
        // ユニークID取得
        const uuid = createdUuid; 
        // 入力値を取得
        const inputName = document.getElementById('name').value;
        const inputPw   = document.getElementById('pw').value;
        const inputMail = document.getElementById('mail_address').value;
        
        // DBに入力した値を保存
        await fetch('http://localhost:3000/api/user', {
            method:'POST',
            body:JSON.stringify({
                id:uuid,
                name:inputName,
                pw:inputPw,
                mail_address:inputMail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    // 各入力チェックの戻り値を確認し全てfalse（問題なし）の場合はDBに登録しアカウント作成完了画面へ遷移、一つでもtrue（問題あり）であればエラーメッセージを画面表示し再入力を促す
    const transitionAccountSuccessPage = async () => {
        //ユーザ名の入力チェック関連
        const formatUserNameFlg    = checkFormatValue('name', /^[A-Za-z0-9]+$/); // 入力したユーザ名のフォーマットの整合性をbooleanで取得
        const wordCountUserNameFlg = checkWordCountValue('name'); // // 入力したユーザ名の文字数の整合性をbooleanで取得
        // メアドの入力チェック関連
        const duplicateMailFlg     = await checkDuplicateMail(); // 入力したメールアドレスが重複していないかどうかをbooleanで取得
        const formatmailFlg        = checkFormatValue('mail_address', /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/); // 入力したメールアドレスのフォーマットの整合性をbooleanで取得
        // パスワードの入力チェック関連
        const formatPwFlg          = checkFormatValue('pw', /^[A-Za-z0-9]+$/); // 入力したユーザ名のフォーマットの整合性をbooleanで取得
        const wordCountPwFlg       = checkWordCountValue('pw'); // 入力したIDの文字数の整合性をbooleanで取得
        const matchPwFlg           = checkMatchPw(); // 再入力したパスワードの値との一致を確認

        let errorComment = ''; // アラートに表示するエラー分の文面
        if (formatUserNameFlg || wordCountUserNameFlg) {
            errorComment += '・ユーザ名は半角英数字6文字以上16文字以下で入力して下さい。\n';
        }
        if (duplicateMailFlg) {
            errorComment += '\n・入力されたメールアドレスは既に利用されています。\n  他のメールアドレスを入力して下さい。\n';
        }
        if (formatmailFlg) {
            errorComment += '\n・メールアドレスを正しく入力して下さい。\n';
        }
        if (formatPwFlg || wordCountPwFlg) {
            errorComment += '\n・パスワードは半角英数字6文字以上16文字以下で入力して下さい。\n';
        } else if (matchPwFlg) {
            errorComment += '\n・パスワードが一致しません。\n正しく入力して下さい。\n';
        }

        // 入力エラーチェック
        if (errorComment) {
            alert(errorComment);
        } else {
            // uuid作成
            const createdUuid = uuidv4();
            // 入力した値をDBに格納
            saveDatabase(createdUuid);
            // アカウント作成成功画面へ遷移
            window.location.href = 'http://localhost:3000/posts/successCreateAccount';   
        }
    }
    
    return (
    <>
    <Head>
        <title>アカウント作成</title>
        <meta name='description' content='createAccount' author='Y.S' />
        <link rel='icon' href='/images/favicon.ico' />
    </Head>
    <div style={styles.container}> 
        <div style={styles.distortedCircle}></div>
        <Image src="/images/twitter_logo.png" alt="twitterのロゴ" width={150} height={50} />        
        <div className='fs-2' style={styles.center}>アカウントを作成</div><br></br>
        <span className='fs-6'>ユーザ名</span>
        <InputGroup className='mb-3' style={{width:400}}>
            <FormControl
            　　id='name' 
                placeholder='半角英数字6文字以上16文字以下で入力して下さい'
                aria-label='Username'
                aria-describedby='basic-addon1'
                style={{width:150}}>
            </FormControl>
        </InputGroup>
        <span className='fs-6'>メールアドレス</span>
        <InputGroup className='mb-3' style={{width:400}}>
            <FormControl
                id = 'mail_address'
                placeholder='メールアドレスを入力して下さい'
                aria-label='Username'
                aria-describedby='basic-addon1'
            />
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
        <span className='fs-6' style={{textAlign:'left'}}>パスワード再入力</span>
        <InputGroup className='mb-3' style={{width:400}}>
            <FormControl
                id = 'pw_again'
                className='col-xs-2'
                placeholder='半角英数字6文字以上16文字以下で入力して下さい'
                aria-label='Username'
                aria-describedby='basic-addon1'
            />
        </InputGroup>
        <Button variant='outline-primary'style={{width:150}} onClick={() => transitionAccountSuccessPage()}>作成</Button><br></br>
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

export default CreateAccount;

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
        width:700, 
        height:700,
        borderRadius:'50% 50% 50% 70%/50% 50% 70% 60%', 
        background:'#add8e6', 
        position:'absolute',
        zIndex:'-1'
      }
};

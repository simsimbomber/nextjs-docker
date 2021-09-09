import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons' //IconContextをインポート
import { ImCross, ImSmile } from 'react-icons/im';
import { GrImage } from 'react-icons/gr';
import { MdPlace } from 'react-icons/md';

import { Form, Button } from 'react-bootstrap';

const ModalWindow = ({show, setShow}) => {

  // ツイートを行う
  const postTweet = () => {
    // 入力した投稿内容を取得
    const inputContents = document.getElementById('contents').value;
    // URLから？もしくはstate？props?からユーザのidを取得
    
    // Tweetテーブルにツイートを保存
    // モーダルを閉じる
    // 画面に投稿内容を表示（これは別の関数に分割）
  }

  if (show) {
    return (
      <div style={styles.overlay}>
          <div style={styles.content}>
              <p><button onClick={() => setShow(false)}><ImCross /></button></p>
              <p>
                <Form>
                  <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Control id='contents' as='textarea' rows={6} placeholder='いまどうしてる？'/>
                  </Form.Group>
                </Form>
              </p>
              <p style={{display:'flex'}}>
                <IconContext.Provider value={{size:'30px'}}>
                  <GrImage style={{flexBasis:'10%'}} />
                  <ImSmile style={{flexBasis:'10%'}} />
                  <MdPlace style={{flexBasis:'10%'}} />
                </IconContext.Provider>
                <p style={{flexBasis:'70%'}}><Button variant='outline-primary' style={{width:150}} onClick={() =>postTweet()}>ツイートする</Button></p>
              </p>
                
          </div>
      </div> 
    )
  } else {
    return null;
  }
}

export default ModalWindow;

// CSS in Js
const styles = {
    overlay: {
      /*　画面全体を覆う設定　*/
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      height:'100%',
      background:'rgba(0,0,0,0.5)',
        
      /*　画面の中央に要素を表示させる設定　*/
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',  
    },
    content:{
      zIndex:2,
      width:'50%',
      padding: '1em',
      background:'#fff',
    },
};

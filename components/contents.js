import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons' //IconContextをインポート
import { ImCross, ImSmile } from 'react-icons/im';
import { GrImage } from 'react-icons/gr';
import { MdPlace } from 'react-icons/md';

import { Alert } from 'react-bootstrap';

const ErrorMessage = (props) => {
  // メッセージを表示するかしないかを判断
  if (props.displayFlg) {
    return (
        <Alert style={styles.dammy} variant={'danger'}>
          {props.message}
        </Alert>
    );
  } else {
    return (
      <div style={styles.dammy} /> 
    );
  }
}

export default ErrorMessage;

// CSS in Js
const styles = {
  dammy: {
    width:300, 
    height:30,
  },

};

import Omikuji2 from './components/Omikuji2.js';  // おみくじコンポーネント
import Link from 'next/link'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderSns from '../../../components/headerSns';
import FooterSns from '../../../components/footerSns';

export default function Home() {
  return (
    <>
      <HeaderSns />
      <div style={styles.container}>
        <Omikuji2 />
        <div style={{textAlign:'center'}}>
          <br></br>
          <Link href="/" className="fs-6">
            <a>ホームに戻る</a>
          </Link>
        </div>
      </div>
      {/* <FooterSns /> */}
    </>
  )
}

// CSS in Js
const styles = {
  container: {
      minHeight: '80vh',
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
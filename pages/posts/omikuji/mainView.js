import Omikuji2 from './components/Omikuji2.js';  // おみくじコンポーネント
import Link from 'next/link'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderSns from '../../../components/headerSns';
import FooterSns from '../../../components/footerSns';

export default function Home() {
  return (
    <div>
      <HeaderSns />
       <Omikuji2 />
      <div style={{textAlign:'center'}}>
        <br></br>
        <Link href="/" className="fs-6">
          <a>ホームに戻る</a>
        </Link>
      </div>
      <FooterSns />
    </div>
    
  )
}
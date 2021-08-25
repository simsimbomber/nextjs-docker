import React from 'react';
import Omikuji2 from './components/Omikuji2.js';  // おみくじコンポーネント
import Link from 'next/link'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <header>
        <Omikuji2 />
      </header>
      <div style={{textAlign:'center'}}>
        <br></br>
        <Link href="/" className="fs-6">
          <a>ホームに戻る</a>
        </Link>
      </div>
    </div>
    
  )
}
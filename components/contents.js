import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


const Contents = () => {
  console.log('contentsコンポーネント読み込み');

  // コンポーネントがレンダーのされる度に実行する
  useEffect( async () => {
    console.log('contentsコンポーネント（useEffect）読み込み');
    // Tweetテーブルから作成日の新しい順に10個のデータ取得
    const tail10Tweet = await getTail10Tweet();
    console.log(tail10Tweet);
    // 履歴を表示
    drawHistory(tail10Tweet);
  });

  // DBからツイートデータを全て取得
  const getTail10Tweet= async() => {
    // ,sql:'created_timeAsc10'
    const res = await fetch('http://localhost:3000/api/tweet',{method:'GET'});
    const datas = await res.json();
    console.log(datas.data);
    return datas.data;
}

  // 画面に履歴を表示
  const drawHistory = (history) => {
    console.log('★drawHistory★');
    console.log(history);
    const historyElement = document.querySelector('.history'); //クラス "history" を持つ文書内の要素の内、最初のもの(一番古い履歴リスト)を返します。
    console.log('historyElement:'+historyElement)
    removeChildren(historyElement);
  
    // removeChildren(element)//一番古い履歴を削除(子ノードのリストを削除)
    // slice()は、文字列や配列などからデータの一部分だけ取り出せるメソッドになります
    // hoge.slice()historyをrecordにいれる
    //「配列」historyの値を1つずつ「変数recordへ代入してくれるようになります。
    for (const record of history.slice()) {
      console.log(record);
      const { id, create_user_id, contents, favorite_count, retweet_count, created_time } = record;

      // １ツイートごとに枠組みを作成

      // 1行目
      const newDiv_1 = document.createElement('div'); // 新しくdivダグを生成
      newDiv_1.style.padding = "5";
      //newDiv_1.setAttribute('id', id); // liタグにidという属性を指定し、そのidの値に変数idを格納
      newDiv_1.innerHTML = create_user_id; // liタグのHTMLを挿入
      historyElement.appendChild(newDiv_1);
      // 2行目
      const newDiv_2 = document.createElement('div'); // 新しくdivダグを生成
      newDiv_2.style.padding = "5";
      newDiv_2.innerHTML = contents; // liタグのHTMLを挿入
      historyElement.appendChild(newDiv_2);
      // 3行目
      // 4行目
      const newHr = document.createElement('hr'); // 新しくhrダグを生成
      //newDiv_4.style.padding = "5";
      newHr.style.coror ='grey';
      historyElement.appendChild(newHr);
    }
  }

  // 与えられた要素（引数）の子ノードを全削除
  const removeChildren = (element) => {
    console.log(element);
    while (element.firstChild) {//最も古い履歴リストの
      element.removeChild(element.firstChild);
    }
  }

  // ツイート内容を降順で画面に表示
  return (
    <div id='historyArray' className='history'></div>
  );
}

export default Contents;

// CSS in Js
const styles = {
  dammy: {
    width:300, 
    height:30,
  },

};

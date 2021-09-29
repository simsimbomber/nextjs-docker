import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


const Contents = () => {
  console.log('contentsコンポーネント読み込み');

  // コンポーネントのマウント時に1回だけ実行する
  useEffect( async () => {
    console.log('contentsコンポーネント（useEffect）読み込み');
    // Tweetテーブルから作成日の新しい順に10個のデータ取得
    const tail10Tweet = await getTail10Tweet();
    console.log(tail10Tweet);
    // 履歴を表示
    drawHistory(tail10Tweet);
  }, []);

  // DBからツイートデータを全て取得
  const getTail10Tweet= async() => {
    // ,sql:'created_timeAsc10'
    const res = await fetch('http://localhost:3000/api/tweet',{method:'GET'});
    const datas = await res.json();
    return datas.data;
}

  // 画面に履歴を表示
  const drawHistory = (history) => {
    console.log('★drawHistory★');
    const historyElement = document.querySelector('.history'); //クラス "history" を持つ文書内の要素の内、最初のもの(一番古い履歴リスト)を返します。
    console.log('historyElement:'+historyElement)
    removeChildren(historyElement);
  
    // removeChildren(element)//一番古い履歴を削除(子ノードのリストを削除)
    // slice()は、文字列や配列などからデータの一部分だけ取り出せるメソッドになります
    // hoge.reverse() で破壊的。hoge.slice().reverse() で非破壊的.逆順にしたhistoryをrecordにいれる
    //「配列」historyの値を1つずつ「変数recordへ代入してくれるようになります。
    for (const record of history.slice().reverse()) {
      const { id, create_user_id, contents, favorite_count, retweet_count, created_time } = record;
    
      const newLi = document.createElement('li'); // 新しくliダグを生成

      newLi.style.padding = "5";

      newLi.setAttribute('id', id); // liタグにidという属性を指定し、そのidの値に変数idを格納
      newLi.innerHTML = id + ' ' + contents; // liタグのHTMLを挿入
      historyElement.appendChild(newLi);
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

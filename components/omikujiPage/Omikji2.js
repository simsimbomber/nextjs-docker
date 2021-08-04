import React, { useState, useEffect } from 'react';
import config from '../initialize.js'; // 初期読み込み

const Omikuji2 = () => {
  const [state, setOmikujiResult] = useState(
    {
      name: 'push', 
      comment: 'ここに運勢を表示します', 
      probability: '', 
      buttonColor: 'grey'
    }
  );


  // // renderで再描画されるたびに実行する内容
  // const historys = useEffect(()=>{
  //   console.log('useEffect実行（初期描画＋再描画）');
  //   if(localStorage.getItem('omikuji-history')) { // ローカルストレージ存在チェック
  //     // あるとき
  //     localStorage.setItem('omikuji-history', localStorage.getItem('omikuji-history')); // 履歴の永続化　＊omikuji-historyに
  //     historys = JSON.parse(localStorage.getItem('omikuji-history')); // ローカルストレージの値を格納。＊JSON.parsesによって配列として持ってこれてる。JSON.parsesがないと文字列として認識されてしまう。
  //     return historys;
  //   } else {
  //     // ないとき
  //     localStorage.setItem('omikuji-history', ''); // key:omikuji-historyでvalueが空のローカルストレージ作成
  //   }
  // });
  
  // console.log(historys);

  
  // 画面に履歴を表示
  const drawHistory = (history) => {
    console.log('★drawHistory★');
    const historyElement = document.querySelector('.history'); //クラス "history" を持つ文書内の要素の内、最初のもの(一番古い履歴リスト)を返します。
    removeChildren(historyElement);
  
    // removeChildren(element)//一番古い履歴を削除(子ノードのリストを削除)
    //slice()は、文字列や配列などからデータの一部分だけ取り出せるメソッドになります
    //hoge.reverse() で破壊的。hoge.slice().reverse() で非破壊的.逆順にしたhistoryをrecordにいれる
    //「配列」historyの値を1つずつ「変数recordへ代入してくれるようになります。
    for (const record of history.slice().reverse()) {
      const { id, item } = record;
      const newLi = document.createElement('li'); // 新しくliダグを生成

      newLi.style.padding = "5";

      //newLi.classList.add('list-group-item-dark');
      newLi.setAttribute('id', id); // liタグにidという属性を指定し、そのidの値に変数idを格納
      newLi.innerHTML = id + '　　' + item.name; // liタグのHTMLを挿入
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

  // ローカルストレージに値を保存
  const saveResultOmikujiData = (history, max_save_count) => {
    console.log(state);
    console.log('★saveResultOmikujiData★');
    const item = state; // 今回の運勢結果を変数に格納
  
    console.log('history='+history);
    console.log('item='+item);
  
    if (max_save_count <= history.length ) { // もし配列の要素数が10以上の場合は古い順に削除
      history.shift(); // 要素番号0の値を削除
    }
    history.push({ id: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }), item: item }); // 変数history配列に格納
    localStorage.setItem('omikuji-history', JSON.stringify(history)); // ローカルストレージにおみくじの結果（配列）を保存
  }

  // stateの値が変化した後の処理
  const afterChangeStateAction = (config, state)  => {
    console.log('config:'+JSON.stringify(config));
    console.log('state:'+JSON.stringify(state));
    const initialValue = 'push'; // ボタンの初期値
    drawHistory(config.history);　                                   // 履歴の初期表示【0】履歴にローカルストレージの値を表示
    // stateの値が変わるたびにuseEffectによって呼ばれてしまうため、初期値のpushという名前の運勢結果のときにはおみくじの結果とはしない
    if (state.name != initialValue) {
      saveResultOmikujiData(config.history, config.max_save_count); //【1】ローカルストレージに値を保存
      drawHistory(config.history);                                  //【3】履歴にローカルストレージの値を表示
    }
  }

  // おみくじ用運勢のデータをランダムに取得
  const useGetOmikujiResultData = () => {
    // おみくじのデータ
    const omikujiData = [
      { name: '超大吉', comment: '最高最善の一日です', probability: 0.05, buttonColor: 'yellow' },
      { name: '大吉', comment: 'やばい！最高の一日です', probability: 0.1, buttonColor: 'red' },
      { name: '中吉', comment: 'まあまぁの一日です', probability: 0.2, buttonColor: 'blue' },
      { name: '吉', comment: 'ふつうの一日です', probability: 0.3, buttonColor: 'pink' },
      { name: '小吉', comment: 'ちょいワルな一日です', probability: 0.2, buttonColor: 'green' },
      { name: '凶', comment: '結構悪い一日です', probability: 0.1 , buttonColor: 'skyblue' },
      { name: '大凶', comment: '最低最悪の一日です', probability: 0.05, buttonColor: 'purple' }
    ];

    // 乱数でstateを変更する
    const random = Math.random(); //　0以上1未満の乱数取得
    let p = 0 //pの初期値を0として設定
    for (const item of omikujiData) { //omikujiDataの中身を一つずつ順にitemに入れる。中身すべてを入れ終わるまで回る
      p = p+item.probability // 前回のpをprobabilityに足した値が今回のpとなる
      if (random < p) { // もし乱数の値をpが超えたら
        setOmikujiResult({
            name: item.name,
            comment: item.comment,
            probability: item.probability,
            buttonColor: item.buttonColor
        });
        break;
      }
    }
  }

  // 第２引数に設定したconfigとstateの値が変わったタイミングで実行
  useEffect(() => {
    afterChangeStateAction(config, state);
  },[config,state]);
  

  // 画面描画
  return (
  <div>
    <div style={styles.button_wrapper}>
      <button id='mainButton' style={{width: 200, height: 200, borderRadius: 100, color: 'black', background: state.buttonColor, fontSize: 40}} onClick={useGetOmikujiResultData} >{state.name}</button>
    </div>
    <div style={styles.main}>
      <h3>{state.comment}</h3>
      <p>[履歴]</p>
    <div id='historyArray' className='history'></div>
    </div>
  </div>
  );

};

export default Omikuji2;

// CSS in Js
const styles = {
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    color: 'black',
    background: 'grey',
    fontSize: 40,
  },
  header: {
    minHeight: 50,
    background: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
  },
  main: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }, 
  button_wrapper: {
    textAlign:'center'
  }, 

};
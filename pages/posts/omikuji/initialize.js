// ここに初期読み込みに必要なロジックを記述します。

// 以下は初期読み込み
// const historyElement = document.querySelector('.history');//クラス "history" を持つ文書内の要素の内、最初のもの(一番古い履歴リスト)を返します。

console.log('initialize.jsによる初期読み込み');
let history = []; // 配列で履歴作成 
if (typeof window !== "undefined") {
if(localStorage.getItem('omikuji-history')) { // ローカルストレージ存在チェック
    // あるとき
    localStorage.setItem('omikuji-history', localStorage.getItem('omikuji-history')); // 履歴の永続化　＊omikuji-historyに
    history = JSON.parse(localStorage.getItem('omikuji-history')); // ローカルストレージの値を格納。＊JSON.parsesによって配列として持ってこれてる。JSON.parsesがないと文字列として認識されてしまう。
} else {
    // ないとき
    localStorage.setItem('omikuji-history', ''); // key:omikuji-historyでvalueが空のローカルストレージ作成
}
}


// 値をまとめて渡すためにオブジェクト作成
const config = {
    history: history, // おみくじの履歴
    max_save_count: 10, // 履歴の表示最大数　
    // historyElement: historyElement, // 履歴を表示する要素
}

export default config; // 固定値を渡す
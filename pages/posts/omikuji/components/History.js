import React, { useState, useEffect } from 'react';
import config from '../initialize.js'; // 初期読み込み
import Omikuji2 from './Omikuji2';


const History = (props) => {
  return (
    <div>
    <div style={styles.main}>
      {/* <h3>{state.comment}</h3> */}
      <p>[履歴]</p>
    {/* <div id='historyArray' className='history'></div> */}
    </div>
  </div>
  );
};

export default History;

// CSS in Js
const styles = {
  main: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }, 

};
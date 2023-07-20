/*
2023.07.19
리액트 자습서 사이트 제공 index.js
*/

// import React from 'react';
import ReactDOM from 'react-dom/client';

/*
jsconfig.json 에 baseUrl을 적용함으로써 절대경로 처리
기존 스타일 : import './assets/css/index.css';
*/
import 'assets/css/index.css';

/*
컴포넌트당 js 파일 하나로 분리
*/
import { Game }  from 'components/tic-tac-toe/game-component';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  
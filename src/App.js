/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /* 변수에 있던 데이터를 html에 넣고 싶으면 */
  const post = '강남 우동 맛집';
  const [title, setTitle] = useState(['남자 코드 추천', '강남 우동 맛집', '파이션 독학']);
  /* 구조 분해 할당 문법 
  const title = useState(['남자 코드 추천', '강남 우동 맛집', '파이션 독학'])[0];
  const setTitle = useState(['남자 코드 추천', '강남 우동 맛집', '파이션 독학'])[1];
  */
  const [like, setLike] = useState(0);
  const handleLike = () => {
    setLike(like => like + 1);
  };
  const changeTitle = () => {
    const copyTitle = [...title];
    copyTitle[0] = '여자 코드 추천';
    setTitle(copyTitle);
  };
  const sortTitle = () => {
    const copyTitle = [...title];
    copyTitle.sort((a, b) => a > b ? 1 : -1); // 오름차순
    setTitle(copyTitle);
  };

  return (
    <div className="App">
      <header>
        <h1>hcs1105's blog</h1>
      </header>
      <div className="button-area">
        <button type="button" onClick={changeTitle}>제목 변경</button>
        <button type="button" onClick={sortTitle}>가나다순 정렬</button>
      </div>
      <article className="list">
        <h2>
          {title[0]}
          <button type="button" className="btn-like" onClick={handleLike}>😀</button>
          <span>{like}</span>
        </h2>
        <p>6월 8일 발행</p>
      </article>
      <article className="list">
        <h2>{title[1]}</h2>
        <p>6월 8일 발행</p>
      </article>
      <article className="list">
        <h2>{title[2]}</h2>
        <p>6월 8일 발행</p>
      </article>
    </div>
  );
}

export default App;

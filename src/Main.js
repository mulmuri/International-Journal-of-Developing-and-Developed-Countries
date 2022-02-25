import React from 'react';
import "./Main.scss";

import LoginBar from './LoginBar';
import Header from './Header';
import RegisterBar from './RegisterBar';
import Board1 from './Board1';
import Board2 from './Board2';
import FooterBar from './FooterBar';

function Main() {
  return (
    <div>
      <div className="main-header">
        <LoginBar></LoginBar>
        <Header></Header>
      </div>
      <div className="main-body">
        <RegisterBar></RegisterBar>
        <Board1></Board1>
        <Board2></Board2>
      </div>
      <footer className="main-footer">
        <FooterBar></FooterBar>
      </footer>
    </div>
  );
}

export default Main;
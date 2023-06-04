import React from "react";
import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="splash screen-container">
        <div className="logo-container">
          <img
            className="full-logo"
            src={require("./img/full-logo.svg").default}
            alt="감귤마켓 심볼과 텍스트"
          />
        </div>
      </div>

      <div className="login screen-container">
        <div className="login-container">
          <img
            className="symbol-logo"
            src={require("./img/symbol-logo-W.svg").default}
            alt="감귤마켓 심볼"
          />
          <div className="login-account-container">
            <ul className="login-account">
              <li>
                <button className="kakao-account">
                  카카오톡 계정으로 로그인
                </button>
              </li>
              <li>
                <button className="google-account">구글 계정으로 로그인</button>
              </li>
              <li>
                <button className="facebook-account">
                  페이스북 계정으로 로그인
                </button>
              </li>
            </ul>
            <div className="login-signin">
              <button className="login-email">이메일로 로그인</button>
              <button className="sign-in">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

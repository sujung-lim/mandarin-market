import React from "react";
import "./style.css";

function App() {
  return (
    <div className="app">
      <section className="splash screen-container">
        <div className="logo-container">
          <img
            className="full-logo"
            src={require("./img/full-logo.svg").default}
            alt="감귤마켓 심볼과 텍스트"
          />
        </div>
      </section>

      <section className="login screen-container">
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
      </section>

      <section className="profile screen-container">
        <nav className="top-basic-nav">
          <ul className="top-basic-nav-li">
            <li><button className="previous-btn"></button></li>
            <li><button className="more-btn"></button></li>
          </ul>
        </nav>
        <div className="profile-container">
          <div className="profile-header">
            <div className="followers">
              <span>2950</span>
              <span>followers</span>
            </div>
            <img src={require("./img/basic-profile-img.svg").default} alt="프로필 사진" />
            <div className="followings">
              <span>128</span>
              <span>followings</span>
          </div>
          </div> 
          <div className="profile-main">
            <p>애월읍 위니브 감귤농장</p>
            <p>@ weniv_Mandarin</p>
            <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
          </div>
          <div className="profile-footer">
            <button className="message-btn"></button>
            <button className="unfollow-btn">언팔로우 </button>
            <button className="share-btn"></button>
          </div>
          </div>
        <article>

        </article>
        <nav className="tab-menu"></nav>
      </section>
    </div>
  );
}

export default App;

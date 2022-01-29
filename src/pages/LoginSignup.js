import React,{useState} from "react";
import { Link } from "react-router-dom";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import MyPage from "../components/MyPage";

import "../styles/src/LoginSignup.scss";

// img 
import cart from "../assets/img/tablet/cart.png";
import go_to_test_btn from "../assets/img/laptop/go_to_test_btn.png";
// import go_to_test_btn from "../assets/img/tablet/go_to_test_btn.png";





const userId = "박다람";

export default function LoginSignup() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(true);

  // 임의의 사용자 아이디
  // const [userId, setUserId] = useState("");
  // setUserId("박다람");
  const [tapbar, setTapbar] = useState(1);

  const toggle = (index) =>{
    setTapbar(index);
  }

  // when logged in - show diffrent component 
  const LoggedIn = () => {
    return (
      <div className="logged_in">
        <span className="user_id_logged_in">{userId} </span>
        고객님, 로그인에 성공하셨습니다! <br />
        스킨 타입 테스트 및 장바구니 서비스를 이용해보세요!
        <ul>
          <li>
            <Link to="/skin-type-test">
              <img src={go_to_test_btn} alt="스킨 타입 테스트 바로가기 이미지 버튼" />
            </Link>
          </li>
          <li>
            <Link to="/my-cart">
              <img src={cart} alt="장바구니 바로가기 이미지 버튼" />
            </Link>
          </li>
        </ul>
      </div>
    )
  };

  return(
    <>
      <Header />
      <div id="LoginSignup_wrap">
        {
          (loggedIn) 
        ? 
          <>
            <LoggedIn /> 
          </>
        : 
          <div className="LoginSignup_bind">

          <ul className="taps">
            <li className={ tapbar === 1 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(1)}}>로그인</li>
            <li className={ tapbar === 2 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(2)}}>회원가입</li>
          </ul>

          {/* 로그인박스 */}
          <div className={ tapbar === 1 ? 'Login_box' : 'Content_none'} onClick={() => {toggle(1)}}>
            <form>
              {/* 로그인아이디박스 */}
              <ul className="Login_Id_box">
                <li>
                  <img src={require('../assets/img/laptop/user_email.png')} alt="아이디이미지"></img>
                </li>
                <li>
                  <input type="email" id="userId" placeholder="아이디를 입력하세요." required></input>
                  <label for="userId"></label>
                </li>
              </ul>
              {/* 패스워드 박스 */}
              <ul className="Pw_Id_box">
                <li>
                  <img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img>
                </li>
                <li>
                  <input type="password" id="ueserPW" placeholder="비밀번호를 입력하세요." required></input>
                  <label for="userPW"></label>
                </li>
              </ul>
              {/* 버튼박스 */}
              <div className="Login_button">
                <input type="submit" value="로그인"></input>
              </div>
            </form>
          </div>
          

          {/* 회원가입박스 */}
          <div className={ tapbar === 2? 'Signup_box' : 'Content_none'} onClick={() => {toggle(2)}}>
            <form action="#">
              <ul className="first_bundle">
                <li className="Name_box">
                  <label for="userName">
                    <img src={require('../assets/img/laptop/user_name.png')} alt="비밀번호 이미지"></img>
                  </label>
                  <input id="userName" type="text" placeholder="이름" required></input>
                </li>
                <li className="gender_box">
                  <div className="man_box">
                    <label for="userGenderMan">
                      <img src={require('../assets/img/laptop/man.png')} alt="남자 이미지"></img>
                    </label>
                    <input id="userGenderMan" type="radio" name="userGender" placeholder="woman" checked></input>
                  </div>
                  <div className="woman_box">
                    <label for="userGenderWoman">
                      <img src={require('../assets/img/laptop/woman.png')} alt="여자 이미지"></img>
                    </label>
                    <input id="userGenderWoman" type="radio" name="userGender" placeholder="man"></input>
                  </div>
                </li>
              </ul>

              <ul className="second_bundle">
                <li className="signup_email_box">
                  <label for="userEmail">
                    <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
                  </label>
                  <input id="userEmail" type="email" placeholder="아이디(이메일)" required></input>
                </li>

                <li className="signup_pw_box">
                  <label for="userPw">
                    <img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img>
                  </label>
                  <input id="userPw" type="password" placeholder="비밀번호" required></input>
                </li>

                <li className="signup_tel_box">
                  <label for="userTel">
                    <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
                  </label>
                  <input id="userTel"  type="tel" placeholder="전화번호" required maxLength={11}></input>
                </li>
              </ul> 

              <div className="signup_button">
                <input type="submit" value="회원가입"></input>
              </div>

            </form>
          </div>

        </div>
        }
        
      </div>
      <Footer />
    </>
  )
};


// 

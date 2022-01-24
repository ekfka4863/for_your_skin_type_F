// 공통 컴포넌트 임포트 
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "../../components/Card";

import "../../styles/src/MyCart.scss";

// redux & reducer 
import { connect } from "react-redux";   // store에 있는 state 데이터를 꺼내기 위해 필요!

// store에 있는 state 데이터를 꺼내기 위해 필요한 함수
const mapStateToProps = (state) => {
  return (
    myCart: state.cart.myCart,
  )
};




// 진짜 컴포넌트 
function MyCart () {
  return (
    <div id="wrap">
      <Header />

      <div id="myCartBox">
        <h2 className="blind">환영합니다! gusw위시리스트를 해당 페이지에서 확인하세요.</h2>  
        <div className="favorite_items_total_num">
          <h3>장바구니</h3>
          {/* <div className="total_num">Total: {___} item(s)</div> */}
          <div className="total_num">Total: 7 item(s)</div>
        </div>
        <div className="favorite_items_area">
          {/* 여기에 Card.js 컴포넌트!! 
            -> 만약 Card 컴포넌트가 하나도 없으면 "장바구니가 비어있습니다."라고 나타내기!? 
          */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect(mapStateToProps)(MyCart);   // 이렇게 작성 필수!
// https://velog.io/@ksung1889/%EC%8B%A4%EB%AC%B4-React-3.%EC%84%B8%EA%B3%84%EC%B5%9C%EA%B3%A0%EB%A1%9C-%EC%89%AC%EC%9A%B4-Redux-1-props-%EC%8B%AB%EC%9C%BC%EB%A9%B4-%EC%93%B0%EC%84%B8%EC%9A%94
// https://www.youtube.com/watch?v=MNs_7avLIJ4



// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import "../styles/src/SeedmoolBestSellers.scss";

function SeedmoolBestSellers() {
  return (
    <>
      <Header />
      <div className="test">시드물 베스트셀러 들어올 페이지!!</div>
      <Footer />
    </>
  ) 
}


export default SeedmoolBestSellers;
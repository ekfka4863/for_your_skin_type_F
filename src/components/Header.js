import "../styles/src/Header.scss";

import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <header id="headBox">
        <h1>
          <span className="blind">환영합니다. 해당 사이트는 피부타입을 테스트하고, 피부유형에 맞는 제품을 추천 받는 사이트 입니다.</span>
        </h1>
        <nav class="navigation">
          <h2>
            <span className="blind">닥터자르트, 이니스프리, 시드물, 비플레인. 총 4개 브랜드의 인기 제품을 소개합니다. 자세히 보시려면 메뉴바의 링크를 클릭하세요.</span>
          </h2>
          <div className="nav_open_btn">
            <button type="button">
              <span className="blind">메뉴바 열기버튼</span>
            </button>
          </div>
          <ul className="nav_bar">
            <li>
              <Link to="/dr-jart-bestsellers">Dr.Jart</Link>
            </li>
            <li>
              <Link to="/innisfree-bestsellers">Innisfree</Link>
            </li>
            <li>
              <Link to="/seedmool-bestsellers">Seedmool</Link>
            </li>
            <li>
              <Link to="/beplain-bestsellers">Beplain</Link>  
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}


export default Header;
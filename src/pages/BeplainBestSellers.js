// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

// import { Link } from "react-router-dom";
import Card from "../components/Card";

import "../styles/src/BestSellers.scss";

// api / mock data 
import dataObj from "../assets/data/data_renewed";
import { brand4 } from '../components/Card';

function BeplainBestSellers() {
  let cardLen = 0;
  const skinTypes = []; 
  const itemNames = []; 
  const itemPrices = []; 
  const itemFeatures = []; 
  const imageLink = []; 

  dataObj[brand4].forEach((each) => {
    skinTypes.push(each.skinType);
    itemNames.push(each.name);
    itemPrices.push(each.price);
    itemFeatures.push(each.itemFeature);
    imageLink.push(each.imageLink);
    cardLen++;
  });

  // reference:  https://codingbroker.tistory.com/123
  const renderItemCard = () => {
    const result = [];
    for (let i = 0; i < cardLen; i++) {
      result.push(<Card 
                    key={i} 
                    skinTypes={skinTypes[i]} 
                    itemNames={itemNames[i]}
                    itemPrices={itemPrices[i]} 
                    itemFeatures={itemFeatures[i]}
                    imageLink={imageLink[i]}
                  />
      );            
    }
    return result;
  };

  return (
    <div id="wrap">
      <Header />
      {/* <div className="test">비플레인 베스트셀러 들어올 페이지!!</div> */}
      <div id="bestSellerBox">
        <h2>Beplain</h2>
        <h3>베스트셀러</h3>
        <div className="cards_area">
          <div className="cards_inner">
            {/* 여기에 Card.js 컴포넌트!! */}
            {/* <Card 
              skinTypes={skinTypes[0]} 
              itemNames={itemNames[0]}
              itemPrices={itemPrices[0]} 
              itemFeatures={itemFeatures[0]}
            />  */}
            {renderItemCard()}
          </div>
          <div className="cards_more_btn">
            <button type="button">+더보기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}


export default BeplainBestSellers;
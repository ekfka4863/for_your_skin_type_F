import { useRef, useState } from "react";
import "../styles/src/Card.scss";

// api / mockdata
// import dataObj from "../assets/data/data_renewed";

export const brand1 = "drjart";
export const brand2 = "innisfree";
export const brand3 = "seedmool";
export const brand4 = "beplain";


// function Card () {
function Card ({ skinTypes, itemNames, itemPrices, itemFeatures, imageLink }) {
  const priceSign = "원";

  
  // let favoriteItemsCurr = useRef([]);
  
  let favoriteItemCurr = useRef(false);
  const [favoriteItem, setFavoriteItem] = useState(favoriteItemCurr.current);

  const onClickFavorite = () => {
    favoriteItemCurr.current = !favoriteItemCurr.current;
    setFavoriteItem(favoriteItemCurr.current);

    // favoriteItemsCurr.push(______); // 해당 카드 컴포넌트 api 데이터 넣어주기 ...!?

    // console.log("button clicked!!", favoriteItemCurr.current);
    // console.log(document.querySelector(".to_favorite_item"));
    // console.log(favoriteItem);
  };

  return (
    <div className="card">
      <div className="card_detail_part">
        <div className="item_img" style={{backgroundImage: "url(" + `${imageLink}`+ ")"}}></div>
        <div className="item_name">{itemNames}</div>
        <div className="item_price">{itemPrices + priceSign}</div>
        {/* <div className="item_feature">{skinTypes[0] + " " + itemFeatures.map((e) => `#${e} `)}</div> */}
        <div className="item_feature">{`#${skinTypes} #${itemFeatures}`}</div>
      </div>
      <div className="card_cover_part">
        <button type="button" className="go_to_shopping_btn">
        {/* <button type="button" className="go_to_shopping_btn" onClick={location.href = {}}> */}
          <span className="cart_icon"></span>
          <span>바로구매</span>
        </button>
        <button onClick={onClickFavorite} className={(favoriteItem === false) ? "to_favorite_item" : "to_favorite_item in_cart"}></button>
      </div>
    </div>
  )
}

export default Card;
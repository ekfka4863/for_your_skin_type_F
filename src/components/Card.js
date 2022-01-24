import { useRef, useState } from "react";
// import { useState } from "react";
import "../styles/src/Card.scss";

function Card () {

  // e.g. 
  const itemName = "세라마이딘 엑토인 인퓨즈드";
  const itemPrice = 68000;
  const priceSign = "원";
  const itemFeature = ["민감", "크림형"]; 


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
        <div className="item_img"></div>
        <div className="item_name">{itemName}</div>
        <div className="item_price">{itemPrice + priceSign}</div>
        <div className="item_feature">{itemFeature.map((e) => `#${e} `)}</div>
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
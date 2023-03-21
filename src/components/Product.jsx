import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({ key,title, price, image, rating,id, index }) {

  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key:id,
        id:id,
        title: title,
        image: image,
        rating: rating,
        price: price,
        index: index
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;

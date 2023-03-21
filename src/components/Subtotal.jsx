import React, { useState } from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  
 

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        thousandsGroupStyle="lakh"
        thousandSeparator=","
        displayType="text"
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button className="subtotal_button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

import React from "react";
import "./Order.css";
import moment from "moment/moment";
import CheckoutProduct from "./CheckoutProduct";
import { NumericFormat } from "react-number-format";

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <NumericFormat
                  value={order.data.amount /100}
                  decimalScale={2}
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                  displayType="text"
                  prefix={"$"}
                  renderText={(value) => (
                    <>
                      <h3 className="order__total">Order Total: {value}</h3>
                    </>
                  )}
                />
        </div>
    )
}

export default Order;
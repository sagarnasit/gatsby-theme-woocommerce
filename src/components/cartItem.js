import React from "react"
import FormatedPrice from './formatedPrice';

const CartItem = ({ id, name, price: priceWithCurrency, qty, removeItem }) => {
    const priceWithoutCurrency = priceWithCurrency.replace("$", "")
    return (
        <li className="woocommerce-cart__item">
            <h4 className="woocommerce-cart__item-name">{name}</h4>
            <span>
                <FormatedPrice price={priceWithoutCurrency} />
            </span>{" "}
            x <span>{qty}</span> ={" "}
            <span>
                <FormatedPrice price={priceWithoutCurrency * qty} />
            </span>
            <span className="remove-item" href="" onClick={() => removeItem(id)}>
                Remove
            </span>
        </li>
    )
}

export default CartItem;
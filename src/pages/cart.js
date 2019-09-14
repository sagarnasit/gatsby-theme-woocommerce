import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"

const CartItem = ({ id, name, price: priceWithCurrency, qty, removeItem }) => {
  const priceWithoutCurrency = priceWithCurrency.replace("$", "")
  return (
    <li css={style}>
      <h4>{name}</h4>
      <div>{/* <img src={} /> */}</div>
      <span>
        <FormatedPrice price={priceWithoutCurrency} />
      </span>{" "}
      x <span>{qty}</span> ={" "}
      <span>
        <FormatedPrice price={priceWithoutCurrency * qty} />
      </span>
      <label className="removeItem" href="" onClick={() => removeItem(id)}>
        Remove
      </label>
    </li>
  )
}

const Cart = () => {
  let [cartItems, setCartItems] = useState([])

  useEffect(() => {
    let items = !localStorage.getItem("cart")
      ? null
      : JSON.parse(localStorage.getItem("cart"))

    if (null != items) {
      setCartItems(items)
    }
  }, [])

  function removeItemFromCart(id) {
    let updatedCartItems = cartItems.filter(item => item.id != id)
    localStorage.setItem("cart", JSON.stringify(updatedCartItems))
    setCartItems(updatedCartItems)
  }

  let total = 0
  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <ul
        css={css`
          margin-left: 0;
        `}
      >
        {cartItems.map(item => {
          total += Number.parseInt(item.price.replace("$", "")) * item.qty
          return (
            <CartItem key={item.id} {...item} removeItem={removeItemFromCart} />
          )
        })}
      </ul>
      <hr />
      <p>
        Total: <FormatedPrice price={total} />
      </p>
    </Layout>
  )
}

const style = css`
  margin-bottom: 30px;
  list-style: none;
  font-size: 0.9rem;

  .removeItem {
    margin-left: 2rem;
    color: grey;
    text-decoration: underline;
    cursor: pointer;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 20px;
    color: hsl(270, 50%, 40%);
  }
`
export default Cart

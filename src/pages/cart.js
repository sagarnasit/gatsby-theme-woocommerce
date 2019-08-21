import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"

const CartItem = ({ id, name, price, qty }) => {
  return (
    <li
      css={css`
        margin-bottom: 30px;
      `}
    >
      <h4>{name}</h4>
      <div>{/* <img src={} /> */}</div>
      <span>
        <FormatedPrice price={price} />
      </span>{" "}
      x <span>{qty}</span> ={" "}
      <span>
        <FormatedPrice price={price * qty} />
      </span>
    </li>
  )
}

const SecondPage = () => {
  let cartItems = !localStorage.getItem("cart")
    ? []
    : JSON.parse(localStorage.getItem("cart"))

  let total = 0
  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => {
          total += Number.parseInt(item.price) * item.qty
          return <CartItem key={item.id} {...item} />
        })}
      </ul>
      <hr />
      <p>
        Total: <FormatedPrice price={total} />
      </p>
    </Layout>
  )
}

export default SecondPage

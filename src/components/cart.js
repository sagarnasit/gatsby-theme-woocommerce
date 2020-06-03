import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import CartItem from "../components/cartItem"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"

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
        let updatedCartItems = cartItems.filter(item => item.id !== id)
        localStorage.setItem("cart", JSON.stringify(updatedCartItems))
        setCartItems(updatedCartItems)
    }

    let total = 0
    return (
        <Layout>
            <SEO title="Cart" />
            <h1>Cart</h1>
            <ul className="woocommerce-cart__wrapper">
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

export default Cart

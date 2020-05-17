import React from "react"

function addToLocalStorage(product, qty = 1) {
  let products = !localStorage.getItem("cart")
    ? []
    : JSON.parse(localStorage.getItem("cart"))

  let match = false
  products.map(p => {
    if (p.id === product.id) {
      p.qty += qty
      match = true
    }
    return p
  })

  if (!match) {
    product.qty = qty
    products = [...products, product]
  }

  localStorage.setItem("cart", JSON.stringify(products))
}

const AddToCartButton = props => {
  return (
    <>
      <button onClick={e => addToLocalStorage(props.product)}>
        Add to Cart
      </button>
    </>
  )
}

export default AddToCartButton

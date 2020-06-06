import React from "react"

function addToLocalStorage(e, product, qty = 1) {

  document.getElementsByClassName('add-to-cart')[0].classList.add("clicked");

  setTimeout(function () {
    document.getElementsByClassName('add-to-cart')[0].classList.remove("clicked");

  }, 500);


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
      <button onClick={e => addToLocalStorage(e, props.product)} className="add-to-cart">
        Add to Cart
      </button>
    </>
  )
}

export default AddToCartButton

import React from "react"

export default ({ price }) => {
  const formatedPrice = Number.parseFloat(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
  return <>{formatedPrice}</>
}

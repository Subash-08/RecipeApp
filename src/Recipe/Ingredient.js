import React from 'react'

const Ingredient = ({ingredient, quantity}) => {
  return (
    <>
        <span>{ingredient}</span>
        <span>{quantity}</span>
    </>
  )
}

export default Ingredient
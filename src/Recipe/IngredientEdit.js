import React from 'react'

export default function IngredientEdit(props) {
    const{ingredient,handleIngredientChange ,handleIngredientDelete}=props
    function handleChange(changes){
        handleIngredientChange(ingredient.id,{...ingredient,...changes})
      }
  return (
    <div>
        <input type='text' value={ingredient.ingredient} onChange={e => handleChange({ingredient: e.target.value})} />
        <input type='text'  onChange={e => handleChange({quantity: e.target.value})} value={ingredient.quantity}/>
        <button 
        onClick={() => handleIngredientDelete(ingredient.id)}
        style={{backgroundColor:"red"}}>&times;</button>
    </div>
  )
}


import React,{useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from '../App'

const RecipeList = ({recipes}) => {

  const {handleAddRecipe} = useContext(RecipeContext)
  return (
    <>
    <div style={{width: '50%'  }}>
        {recipes.map(recipe => {
         return <Recipe 
          key= {recipe.id}
          {...recipe}
          /> 
        })}
    
    <div style={{textAlign:"center",padding:"30px"}}>
    <button onClick={handleAddRecipe} >Add recipe</button>

    </div>
    </div>
    </>

  )
}

export default RecipeList
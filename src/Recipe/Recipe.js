import React,{useContext} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from '../App'


const Recipe = (props) => {

    const {handledeleteRecipe, handleRecipeSelect} = useContext(RecipeContext)
    const {
        id,
        name,
        serving,
        cookTime,
        instruction,
        ingredient,

    } = props
  return (
    <div>
        <div style={{display : 'flex'}}>
            <h1>{name}</h1>
           <div>
           <button onClick={() => handleRecipeSelect(id)}>Edit</button>
            <button onClick={() => handledeleteRecipe(id)}>Delete</button>
           </div>
        </div>
        <div>
            <span>Cook time : </span>
            <span>{cookTime}</span>
        </div>
        <div>
            <span>Serving : </span>
            <span>{serving}</span>
        </div>
        <div>
            <span>Instructions :</span>
            <div>
                {instruction}
            </div>

        </div>
        <div>
            <span>Ingredients : </span>
            <div>
                <IngredientList ingredients={ingredient} />
            </div>
        </div>


    </div>
  )
}

export default Recipe
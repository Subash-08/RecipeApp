import React,{useContext} from 'react'
import { RecipeContext } from '../App'
import IngredientEdit from './IngredientEdit'
import { v4 as uuidv4 } from 'uuid';


 export default function RecipeEdit({recipe}){

  const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext)
  function handleChange(changes){
    handleRecipeChange(recipe.id,{...recipe,...changes})
  }
  function handleIngredientChange(id,ingredient){
    const newIngredients = [...recipe.ingredient]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ingredient:newIngredients})
  }

  function handleIngredientAdd(){
    const newIngredient = {
      id:uuidv4(),
      ingredient:'',
      quantity:''
    }
    handleChange({ingredient:[...recipe.ingredient,newIngredient]})
  }
  function handleIngredientDelete(id){
    handleChange({ ingredient:recipe.ingredient.filter(i => i.id !== id)})
  }

  return (
    <div style={{width:"50%"}}>
        <span
         style={{cursor:"pointer",position:"fixed",top:"0",right:"0",margin:"5px",padding:"8px 10px",border:"black 1px solid",backgroundColor:"red"}}
         onClick={() => handleRecipeSelect(undefined)}
        >&times;</span>
        <div style={{display:"flex",flexWrap:"wrap",boxSizing:'border-box',marginTop:"30px"}}>
            <label htmlFor='name' style={{flex:'25%',margin:"10px 10%"}}>Name</label>
            <input name='name' onChange={e => handleChange({name: e.target.value})} value={recipe.name} id='name' type='text' style={{flex:'25%',margin:"10px 10%"}}/>
            <label htmlFor='time'style={{flex:'25%',margin:"10px 10%"}}>Cooking Time</label>
            <input name='cookTime' onChange={e => handleChange({cookTime: e.target.value})} value={recipe.cookTime} id='time' type='text'style={{flex:'25%',margin:"10px 10%"}}/>
            <label htmlFor='serving'style={{flex:'25%',margin:"10px 10%"}}>Serving</label>
            <input type='number'onChange={e => handleChange({serving: parseInt(e.target.value) || ''})} id='serving'  value={recipe.serving} name='serving' min={1} style={{flex:'25%',margin:"10px 10%"}}/>
            <label htmlFor='instruction'style={{flex:'25%',margin:"10px 10%"}}>Instruction</label>
            <textarea name='instruction' onChange={e => handleChange({instruction: e.target.value})}  value={recipe.instruction} id='instruction' style={{flex:'25%',margin:"10px 10%"}} />
        </div>
        <br />
        <label>Ingredient:</label>
        <br />
        <br />
        <div style={{display:"flex",textAlign:"center",justifyContent:"space-around",flexDirection:"column"}}>
            <div>
            <span style={{marginRight:"180px"}}>Name</span>
            <span>Quantity</span>
            </div>
            <div>
              {recipe.ingredient.map(n =>(
               
                <IngredientEdit  
                handleIngredientChange={handleIngredientChange}
                 key={n.id} ingredient={n} 
                 handleIngredientDelete = {handleIngredientDelete}
                 />
              ))}
              
            </div>
        </div>
        <br />
        
        <div style={{position:"fixed",right:"25%",margin:"5px",padding:"8px 10px",border:"black 1px solid",backgroundColor:"blue",color:"white"}}
        onClick={() => handleIngredientAdd()}
        >Add Ingredient</div>
    </div>
  )
}


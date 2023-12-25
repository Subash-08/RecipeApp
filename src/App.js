import React, { useState,useEffect } from 'react';
// import { Todolist } from './components/todo';
// import Home from './components/Home';
// import Api from './components/Api';
// import {BrowserRouter ,Routes ,Route , Link} from 'react-router-dom';
// import { Product } from './components/product';
import RecipeList from './Recipe/RecipeList'
import { v4 as uuidv4 } from 'uuid';
// import Recipe from './Recipe/Recipe';
import RecipeEdit from './Recipe/RecipeEdit';

export const RecipeContext = React.createContext() 
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
const App = () => {
    
    const [selectedRecipeId,setselectedRecipeId] = useState()
    const [recipes, setRecipes] = useState(sampleRecipe)
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
    useEffect(()=> {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
         if (recipeJSON != null)setRecipes(JSON.parse(recipeJSON))
        //  console.log(recipeJSON)

     },[])

    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
        
    },[recipes])

    
    const recipeContextValue = {
        handleAddRecipe,
        handledeleteRecipe,
        handleRecipeSelect,
        handleRecipeChange
    }

    function handleRecipeSelect(id){
        setselectedRecipeId(id)
    }

    function handleRecipeChange(id, recipe){
        const newRecipe = [...recipes]
        const index = newRecipe.findIndex(r => r.id === id)
        newRecipe[index] = recipe
        setRecipes(newRecipe)
    }
    function handleAddRecipe() {
        const newRecipe = {
            id: uuidv4(),
            name: "",
            serving: 1,
            cookTime: 1,
            instruction: " ",
            ingredient:[{
                id: uuidv4(),
                ingredient: "",
                quantity: 1
            }]
        }
        setselectedRecipeId(newRecipe.id)
        setRecipes([...recipes,newRecipe])
    }
    function handledeleteRecipe(id){
        if(selectedRecipeId != null && selectedRecipeId ===id){
            setselectedRecipeId(undefined)
        }
        setRecipes(recipes.filter((recipe) => recipe.id !== id))
    }
    // const handledeleteRecipe = (id) => {
    //     setRecipes(recipes.filter((recipe) => recipe.id !== id))

    // }
    return (

        <RecipeContext.Provider value={recipeContextValue}>
        <div style ={{display:'flex'}}>
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
        
        </div>
        </RecipeContext.Provider>
        


        //     <div >
        //     <BrowserRouter>
        //     <ul style={{display:"flex",textAlign:"center",alignItems:"center",margin:"0px"}}>
        //     <li style={{listStyleType:"none",margin:"20px"}}>
        //         <Link  to='/' style={{textDecoration:"none",color:"red"}}>Home</Link>
        //     </li>
        //     <li style={{listStyleType:"none",margin:"20px"}} >
        //         <Link to='/todo/1' style={{textDecoration:"none",color:"red"}}>Todo 1</Link>
        //     </li>
        //     <li style={{listStyleType:"none",margin:"20px"}} >
        //         <Link to='/todo/2' style={{textDecoration:"none",color:"red"}}>Todo 2</Link>
        //     </li>
        //     <li style={{listStyleType:"none",margin:"20px"}}>
        //         <Link to='/api' style={{textDecoration:"none",color:"red"}}>Api</Link>
        //     </li>
        //   </ul>
        //        <div className='container'>
        //        <Routes>
        //             <Route path='/' element={<Home />}/>
        //             <Route path='/todo/:id' element={<Todolist />}/>
        //             <Route path='/api' element={<Api />}/>
        //             <Route path='/product' element={<Product />}/>

        //         </Routes>
        //        </div>
        //     </BrowserRouter>
        //     </div>


    )


}
const sampleRecipe = [
    {
        id: 1,
        name: "Plain chicken",
        serving: 3,
        cookTime: 1,
        instruction: " 1.Put masala \n2.Put chicken in oven",
        ingredient: [{
            id: 1,
            ingredient: "chicken",
            quantity: 1
        },
        {
            id: 2,
            ingredient: "masala",
            quantity: 1
        }]

    },
    {
        id: 2,
        name: "Mutton",
        serving: 2,
        cookTime: 2,
        instruction: " 1.Put masala \n2.Put mutton in oven",
        ingredient: [{
            id: 1,
            ingredient: "mutton",
            quantity: 1
        },
        {
            id: 2,
            ingredient: "masala",
            quantity: 1
        }]
    }
]
export default App;
import { useState } from "react";
import DisplayRecipe from "./DisplayRecipe";

const SearchRecipe = () => {

    const [ingredient, setIngredient] = useState("")
    const [recipeData, setRecipeData] = useState([])

    const searchRecipe = (e) => {
        e.preventDefault()
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Your error code is: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            console.log(data); 
            setRecipeData(data.meals)      
        })
    }

    const handleSubmit = (e) => {
        setIngredient(e.target.value)
        console.log(e.target.value)
    }

    const recipeElement = recipeData.map((e => {
        return <DisplayRecipe 
            key={e.idMeal} 
            recipeName={e.strMeal} 
            recipeInstructions={e.strInstructions}
            recipeImage={e.strMealThumb}
            />
    }))

    return ( 
        <div>
            <form action="" onSubmit={searchRecipe}>
                <input 
                    type="text" 
                    placeholder="ingredient here"
                    // value={ingredient}
                    onChange={handleSubmit}
                />
                <button>Search</button>
            </form>
            {recipeElement}
        </div>
     );
}
 
export default SearchRecipe;



// https://www.themealdb.com/api.php
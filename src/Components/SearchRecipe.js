import { useState } from "react";

const SearchRecipe = () => {

    const [ingredient, setIngredient] = useState("")
    const [recipeData, setRecipeData] = useState([])

    const searchRecipe = (e) => {
        e.preventDefault()
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=broccoli")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Your error code is: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            console.log(data);       
        })
    }


    const handleSubmit = (e) => {
        // setIngredient(e.target.value)
        console.log(e.target.value)
    }

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
        </div>
     );
}
 
export default SearchRecipe;
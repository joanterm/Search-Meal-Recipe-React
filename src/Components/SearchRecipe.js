import { useState } from "react";
import DisplayRecipe from "./DisplayRecipe";
import "../Styling/SearchRecipe.css"

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
            ingredient={e.strIngredient1}
            />
    }))

    // const recipeElement = recipeData.map((e) => {
    //     const arr=[]
    //     for(let i=1; i<=20; i++) {
    //         arr.push(
    //             <DisplayRecipe 
    //             recipeName={e.strMeal}
    //             ing={e[`strIngredient${i}`]}
    //             />
    //         )
    //     }
    //     return arr;
    // })
    // console.log(recipeElement)


    const ingr = recipeData.map((e) => {
        const arr=[]
        for(let i=1; i<=20; i++) {
           arr.push((e[`strIngredient${i}`]))
        }
        return arr;
    })

    const newin = ingr.map((e) => <div className="div">{e.map((e) => <p>{e}</p>)}</div>)
    newin.map((e) => <p>{e}</p>)
    console.log(newin)

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
            {newin}
            {/* {newin.forEach((e) => <p>{e}</p>)} */}

        </div>
     );
}
 
export default SearchRecipe;



// https://www.themealdb.com/api.php
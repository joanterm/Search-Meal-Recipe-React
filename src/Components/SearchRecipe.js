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
                throw Error(`Your error code is: ${response.status}`)
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


    if (recipeData === null) {
        return (
            <div>
                <form action="#" onSubmit={searchRecipe}>
                    <input 
                        type="text" 
                        placeholder="ingredient here"
                        name="ingredient"
                        value={ingredient}
                        onChange={handleSubmit}
                    />
                    <button>Search</button>
                </form>
                <p>wrong value</p>
        </div>      
        )  
    }  

    // CREATES AN ARRAY OF INGREDIENTS FOR EACH RECIPE, AND MAPS OVER IT UNTIL IT DISPLAYS IT AS A LIST
    const ingredientList = recipeData.map((allData) => {
        const arr=[]
        for(let i=1; i<=20; i++) {
           arr.push((allData[`strMeasure${i}`] + ' ' + allData[`strIngredient${i}`]))
        }
        return arr;
    }).map((measureAndIngredientData) => {
        return <div>
            {measureAndIngredientData.map((measureAndIngredientElement, index) =>
                <p key={index}>{measureAndIngredientElement}</p>
            )}
        </div>
    })

    // CREATES AN ELEMENT THAT WILL USE A REUSABLE COMPONENT TO DISPLAY DATA; MERGES BOTH DATAS TOGETHER
    const recipeElement = recipeData.map((allData, index) => {
        return <DisplayRecipe 
            key={allData.idMeal}  
            recipeName={allData.strMeal} 
            recipeInstructions={allData.strInstructions} 
            recipeIngredients={ingredientList[index]}/>
    })
    
    return ( 
        <div>
            <form action="#" onSubmit={searchRecipe}>
                <input 
                    type="text" 
                    placeholder="ingredient here"
                    name="ingredient"
                    value={ingredient}
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
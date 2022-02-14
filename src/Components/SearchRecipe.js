import { useState } from "react";
import DisplayRecipe from "./DisplayRecipe";
import "../Styling/SearchRecipe.css"

const SearchRecipe = () => {

    const [ingredient, setIngredient] = useState("")
    const [recipeData, setRecipeData] = useState([])
    const [isDataNull, setIsDataNull] = useState(false)

    // FETCH API
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
            // console.log(data)
            if (data.meals === null || ingredient === "") {
                setIsDataNull(true)
            } else {
                setRecipeData(data.meals) 
                setIsDataNull(false)
            }
        })
    }

    // HANDLES THE SEARCH BUTTON
    const handleSubmit = (e) => {
        setIngredient(e.target.value)
        console.log(e.target.value)
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
            recipeImage={allData.strMealThumb}
            recipeIngredients={ingredientList[index]}/>
    })

    // CREATES AN ELEMENT THAT WILL DISPLAY A MESSAGE WHEN isDataNull IS TRUE
    const nullDataElement = <p>Ooops... This ingredient doesn't exist. Try again</p>
    
    return ( 
        <section>
            <div className="form-area">
                <form action="#" onSubmit={searchRecipe}>
                    <input 
                        type="text" 
                        placeholder="E.g. chicken..."
                        // name="ingredient"
                        value={ingredient}
                        onChange={handleSubmit}
                    />
                    <button className="form-area--btn">Search</button>
                </form>
            </div>
            <div className="recipe-area">
                {isDataNull ? nullDataElement : recipeElement}
            </div>
        </section>
     );
}
 
export default SearchRecipe;

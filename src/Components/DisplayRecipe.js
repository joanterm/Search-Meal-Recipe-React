import { useState } from "react";
import "../Styling/DisplayRecipe.css"

const DisplayRecipe = (props) => {

    const [isRecipeOpen, setIsRecipeOpen] = useState(false)

    const openRecipe = () => {
        console.log("open")
        setIsRecipeOpen((prev) => {
            return (
                !prev
            )
        })
    }
    
    return ( 
        <section className="display-recipe--card">
            <h1>{props.recipeName}</h1>
            <img src={props.recipeImage} />
            <button onClick={openRecipe}>OPEN RECIPE</button>
            {props.recipeIngredients}
            <p>{isRecipeOpen && props.recipeInstructions}</p>
        </section>
     );
}
 
export default DisplayRecipe;
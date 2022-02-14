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
            <img src={props.recipeImage} className="display-recipe--img"/>
            {props.recipeIngredients}
            {!isRecipeOpen ? <button className="display-recipe--btn-open" onClick={openRecipe}>OPEN RECIPE</button> : <button className="display-recipe--btn-close" onClick={openRecipe}>CLOSE RECIPE</button>}
            <p>{isRecipeOpen && props.recipeInstructions}</p>
        </section>
     );
}
 
export default DisplayRecipe;
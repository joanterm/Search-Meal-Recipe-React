const DisplayRecipe = (props) => {
    return ( 
        <section>
            <h1>Recipe1</h1>
            <p>{props.recipeName}</p>
            <p>{props.recipeInstructions}</p>
            <img src={props.recipeImage} />
            {props.recipeIngredients}
        </section>
     );
}
 
export default DisplayRecipe;
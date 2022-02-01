const DisplayRecipe = (props) => {
    return ( 
        <section>
            <h1>Recipe</h1>
            <p>{props.recipeName}</p>
            <p>{props.recipeInstructions}</p>
            <img src={props.recipeImage} />
        </section>
     );
}
 
export default DisplayRecipe;
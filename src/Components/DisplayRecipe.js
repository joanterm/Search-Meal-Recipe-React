const DisplayRecipe = (props) => {
    return ( 
        <section>
            <h1>Recipe</h1>
            <p>{props.recipeName}</p>
            <p>{props.recipeInstructions}</p>
            <img src={props.recipeImage} />
            <h3>{props.ingredient}</h3>
            <p>---------------------------------------</p>
            <p>INGREDIENTS HERE:</p>
        </section>
     );
}
 
export default DisplayRecipe;
const DisplayRecipe = (props) => {
    return ( 
        <section>
            <h1>Recipe1</h1>
            <p>{props.recipeName}</p>
            <p>{props.recipeInstructions}</p>
            <img src={props.recipeImage} />
            <h3>{props.ingredient}</h3>
        </section>
     );
}
 
export default DisplayRecipe;
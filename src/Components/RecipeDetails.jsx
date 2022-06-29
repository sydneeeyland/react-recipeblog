import React from 'react'

function RecipeDetails({image, recipe, ingredients, preparation}) {
    console.log(ingredients);
    return (
        <section className='container-fluiid'>
            <article className='col-xxl-12 row'>
                <div className='col-xxl-6'>
                    <img className='card-img rounded' src={image} />
                </div>
                <div className='col-xxl-6'>

                    <h3>{recipe}</h3>
                    
                    <section>
                        <h5 className='pt-2'>Ingredients</h5>
                        <hr />
                        <ul className='recipe-details'>
                            {
                                ingredients.map((x) =>
                                    <li>{x}</li>
                                )
                            }
                        </ul>
                    </section>
                    <section>
                        <h5 className='pt-2'>Instructions</h5>
                        <hr />
                        <ul className="recipe-preparation d-flex flex-column gap-3">
                            {
                                preparation.map((x) =>
                                    <li>{x}</li>
                                )
                            }
                        </ul>
                    </section>
                    <section>
                        <h5 className='pt-2'>Video</h5>
                        <hr />
                    </section>
                </div>
            </article>
        </section>
    )
}

export default RecipeDetails
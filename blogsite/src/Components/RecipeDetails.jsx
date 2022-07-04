import React from 'react'

function RecipeDetails({id, image, recipe, ingredients, preparation, video}) {
    return (
        <section className='container-fluiid'>
            <article className='col-xxl-12 row'>
                <div className='col-xxl-6'>
                    <img className='card-img rounded' src={ image ? image : ''} alt={ recipe ? recipe : '' } />
                </div>
                <div className='col-xxl-6'>
                    <h3>{recipe}</h3>
                    <section>
                        <h5 className='pt-2'>Ingredients</h5>
                        <hr />
                        <ul className='recipe-details'>
                            { ingredients ? ingredients.map((x) => <li>{x}</li> ) : '' }
                        </ul>
                    </section>
                    <section>
                        <h5 className='pt-2'>Instructions</h5>
                        <hr />
                        <ul className="recipe-preparation d-flex flex-column gap-3">
                            { preparation ? preparation.map((x) => <li>{x}</li> ) : '' }
                        </ul>
                    </section>
                    <section>
                        <h5 className='pt-2'>Video</h5>
                        <hr />
                        <iframe width="920" height="650" src={video ? video : ''} title="Chicken Sotanghon Tinola Soup | Chicken Noodle Soup Recipe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </section>
                </div>
            </article>
        </section>
    )
}

export default RecipeDetails
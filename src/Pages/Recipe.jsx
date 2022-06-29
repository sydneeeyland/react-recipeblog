import React from 'react'
import { useParams } from 'react-router-dom';
import RecipeDetails from '../Components/RecipeDetails';

function Recipe() {
  const { id } = useParams();

  const recipeDetails = [
    {
      "id": "1",
      "recipe": "Beef and Mustard Pie",
      "image": "https://panlasangpinoy.com/wp-content/uploads/2022/02/chicken-tinola-sotanghon.jpg",
      "video": "https://youtu.be/nNUiUWSmgtc",
      "ingredients": [
        "8 ounches boneless chicken breast",
        "5 ounces sotanghon noodles",
        "1 Knorr Chicken Cube",
        "6 ounces green papaya sliced",
        "1 cup malunggay leaves",
        "4 cloves garlic chopped",
        "1 onion chopped",
        "3 thumbs ginger minched",
        "2 tablespoons cooking oil",
        "6 cups rice wash hugas bigas",
        "Patis and ground black pepper to taste"
      ],
      "prepartion": [
        "Saute garlic, onion, and ginger.",
        "Add chicken once the onion softens. Cook until the outer layer of the chicken turns light brown.",
        "Pour water. Let boil. Add Knorr Chicken Cube. Cover the pot and boil in low to medium heat for 15 minutes.",
        "Add papaya and sotanghon. Cook for 5 minutes.",
        "Add malunggay leaves.",
        "Season with ground black pepper and patis. Finish by adding toasted garlic.",
        "Transfer to a serving bowl. Serve hot. Share and enjoy."
      ]
    }
  ]

  return (
    <React.Fragment>
      <section className='container-fluid'>
        {
          recipeDetails.filter(x => x.id === id).length > 0 ? 
          recipeDetails.map((items) => 
            <RecipeDetails image={items.image} recipe={items.recipe} ingredients={items.ingredients} preparation={items.prepartion} video={items.video} />
          )
          : 'Content Unavailable'
        }
      </section>
    </React.Fragment>
  )
}

export default Recipe
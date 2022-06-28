import React, { useState } from 'react'
import Catalog from '../Components/Catalog'

function Home() {
    const catalog = [
        {
            "id": "1",
            "title": "How to Cook Chicken Sotanghon Tinola",
            "description": "The cold January weather can be a blessing to some, but a bit of a burden to others. With the cool breeze and even cooler nights unfortunately comes the addition of the flu and other viruses. When it comes to getting sick, soups and stews are the cure to soothing both your stomach and any symptoms.",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2022/02/chicken-tinola-sotanghon-recipe.jpg",
            "preptime": "25 minutes",
            "category": "chicken"
        },
        {
            "id": "2",
            "title": "Improved KFC Fried Chicken Recipe",
            "description": "Perhaps one of the most famous renditions for the favored classic, the KFC Fried Chicken recipe is one that everyone seems to be curious about. After all, its share of seasonings and distinct crunch really sets it apart as a chicken dish. Luckily, this is a recipe that you can also try replicating at home so you can whip it up any time you happen to crave it. Whether it be for a movie night, a special house dinner, or just for a snack when the irresistible crispy dish pops into mind, you can try creating some on your own. ",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2022/01/KFC-Fried-Chicken.jpg",
            "preptime": "45 minutes",
            "category": "chicken"
        },
        {
            "id": "3",
            "title": "Improved Crispy Fried Chicken Recipe",
            "description": "What is comfort food to you? If you’re like me, and many other people in the world, one of the images that comes to mind is a gorgeously crispy fried chicken. Simple but flavorful, fried chicken is a treat for both kids and adults alike. Whether you’re enjoying it at a kid’s birthday party or serving it as an appetizer for game night with your barkada (group of friends), crispy fried chicken is definitely a classic choice.",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2016/12/Crispy-Fried-Chicken-Recipe.jpg",
            "preptime": "45 minutes",
            "category": "chicken"
        },
        {
            "id": "4",
            "title": "Original Buffalo Chicken Wings",
            "description": "Some of the most enjoyable gatherings of friends and family involve coming together to watch an epic sports game. Whether it’s the Super Bowl, World Cup, or NBA finals, getting to meet up to cheer your team on is nothing short of exhilarating. Cheering and shouting at your televisions with every great move or missed opportunity is great bonding. It’s made even better when you have delicious plates of food to accompany it! Finger foods and appetizers work like a charm during energetic and exciting game days. And buffalo chicken wings are no exception to this. In fact, they may be the prime example!",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2021/12/How-to-Cook-Buffalo-Chicken-Wings-Recipe-697x1024.jpg",
            "preptime": "10 minutes",
            "category": "chicken"
        },
        {
            "id": "5",
            "title": "Garlic Roast Chicken",
            "description": "One of the most classic main courses you could possibly enjoy is a good old roast chicken. Letting tender meat bake in the oven with an assortment of spices leads to a delicious and flavorful dish that’s impossible not to love. For people young and old, a roast chicken is always enjoyable. From the simplest and most no frills recipe to the fanciest of embellishments, it’s a great meal for everyone! And this garlic roast chicken is one such spin on a classic dish that your whole family is sure to love.",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2021/11/Garlic-Roast-Chicken.jpg",
            "preptime": "1 hour 10 minutes",
            "category": "chicken"
        },
        {
            "id": "6",
            "title": "Sinarsahang Manok",
            "description": "While I also love my fair share of lunches and dinners spent outside, there is something undeniably special about a home-cooked meal. Not only does it emulate a one of a kind atmosphere of warmth and comfort, but it often tastes most fresh coming from your own kitchen. And don’t even get me started on the particular appeal of a home-cooked Filipino dish. Most of our family favorites are recipes with a great deal of vegetables, as well as a lovingly fragrant stew. Let me introduce you to one particular dish that falls under the category, and will definitely bring you back to the taste of home— Sinarsahang Manok!",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2021/08/Sinarsahang-Manok-683x1024.jpg",
            "preptime": "47 minutes",
            "category": "chicken"
        }
    ]
    const [recipe, setRecipe] = useState(catalog);
    
    return (
        <React.Fragment>
            <section className='container mx-auto pt-2'>
                <Catalog data={recipe} />
            </section>
        </React.Fragment>
    )
}

export default Home
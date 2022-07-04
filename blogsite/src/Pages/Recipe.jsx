import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../Components/RecipeDetails';
import Call from '../Api/CallAPI';
import { useState } from 'react';

function Recipe() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    const GetData = async() => {
      const data = await Call(`http://localhost:3003/catalog/${id}`)
      setDetails(data[0]);
    }

    GetData();
  }, [])

  return (
    <React.Fragment>
      <section className='container-fluid'>
        { details ? <RecipeDetails id={details._id} image={details.image} recipe={details.recipe} ingredients={details.ingredients} preparation={details.prepartion} video={details.video}/> : 'Loading' }
      </section>
    </React.Fragment>
  )
}

export default Recipe
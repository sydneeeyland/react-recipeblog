import React from 'react'
import { useParams } from 'react-router-dom';

function Recipe() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>Recipe</div>
  )
}

export default Recipe
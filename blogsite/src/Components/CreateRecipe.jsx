import React from 'react'

function CreateRecipe() {
  return (
    <React.Fragment>
        <form method="POST" encType='multipart/form-data'>
            <div className='mb-3'>
                <label className='form-label' htmlFor='category' required>Category</label>
                <select className='form-select' id='category'>
                    <option value='Chicken'>Chicken</option>
                    <option value='Pork'>Pork</option>
                    <option value='Beef'>Beef</option>
                    <option value='Fish'>Fish</option>
                    <option value='Vegetable'>Vegetable</option>
                    <option value='Desert'>Desert</option>
                </select>
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='title'>Title</label>
                <input className='form-control' id='title' type='text' required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='description'>Description</label>
                <textarea className='form-control' id='description' required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='image'>Image</label>
                <input className='form-control' id='image' type='file' required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='preptime'>Preparation Time</label>
                <input className='form-control' id='preptime' type='text' required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='servings'>Servings</label>
                <input className='form-control' id='servings' type='text' required />
            </div>
        </form>
    </React.Fragment>
  )
}

export default CreateRecipe
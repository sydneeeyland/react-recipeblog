import React from 'react'
import CreateRecipe from '../Components/CreateRecipe'

function SubmitRecipe() {
  return (
    <React.Fragment>
      <section className='container-fluid'>
        <div className='container'>
          <section className='card'>
            <div className='card-header'>
              Create Recipe
            </div>
            <div className='card-body'>
              <h5 className='card-title'>
                <CreateRecipe />
              </h5>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SubmitRecipe
import React from 'react'

function Catalog({data}) {
  return (
    <React.Fragment>
      <section className='col-xxl-12'>
        <article className='row'>
          {
            data.map(items => 
              <section className='col-xxl-3 pb-3' key={items.id}>
                <div className="card shadow-sm">
                  <img src={items.image} height='230px' /> 
                  <div className="card-body">
                    <h5 className="card-title text-center">{ items.title }</h5>
                    <p className="card-text text-center" id='recipe-description'>{ items.description }</p>
                    <span className="badge bg-secondary w-100 ">
                      <img className='pb-1 px-1' src='https://img.icons8.com/office/344/clock--v1.png' height='20px' />
                      { items.preptime }
                    </span>
                    <button className='btn btn-success btn-sm w-100 mt-2'>Read on...</button>
                  </div>
                </div>
              </section>
            )
          }
        </article>
      </section>

    </React.Fragment>
  )
}

export default Catalog
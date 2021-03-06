import React from 'react'

function Navigation() {
  return (
    <React.Fragment>
      <section className='container'>
        <article>
          <ul className='d-flex flex-row gap-5 list-unstyled py-3 fw-bold'>
            <li>
              <a href='/' className='text-decoration-none text-dark'>Home</a>
            </li>
            <li>
              <a href='/recipe/create' className='text-decoration-none text-dark'>Submit Recipe</a>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  )
}

export default Navigation
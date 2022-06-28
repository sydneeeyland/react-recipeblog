import React from 'react'

function Navigation() {
  return (
    <React.Fragment>
      <section className='container'>
        <article>
          <ul className='d-flex flex-row gap-5 list-unstyled py-3 fw-bold'>
            <li>
              <a href='/' className='text-decoration-none text-white'>Home</a>
            </li>
            <li>
              <a href='/' className='text-decoration-none text-white'>Submit Recipe</a>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  )
}

export default Navigation
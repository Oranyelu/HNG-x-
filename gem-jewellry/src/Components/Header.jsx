import React from 'react'

function Header() {
  return (
    //   <div>
    //       Header
    //       <link to="/" >
    //       GO back home</link>
    // </div>
      <>
          <div>
              <p>25%voff new drops</p>
          </div>
          <main>
              <img src="" alt="logo" />
              <div>
                  <input type="text" placeholder='Search' />
                  <img src="" alt="Favourite" />
                  <img src="" alt="User-icon" />
                  <img src="" alt="Cart" />
              </div>
              <nav>
                  <li>Home</li>
                  <li>New in</li>
                  <li>Accessories</li>
                  <li>Jewellery</li>
                  <li>Clothing</li>
                  <li>Gift sets</li>
              </nav>
          </main>
      </>
)
}

export default Header
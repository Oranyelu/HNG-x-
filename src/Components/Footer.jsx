import React from 'react'

function Footer() {
  return (
      <>
          <footer>
              <img src="" alt="" />
              <hr />
              <main>
                  <div className='Footer-links'>
                      <ul>
                          <li>About Us</li>
                          <li>Terms and Conditions</li>
                          <li>Shipping</li>
                          <li>Return Policy</li>
                          <li>Become an Ambassador</li>
                      </ul>
                  </div>
                  <div className='inquiry'>
                      <p>subscribe for exclusivve offers</p>
                      <b>JOIN THE CLUB</b>
                      <input type="email" name="email address" placeholder="Enter your email address" id="user-email" />
                      <span className="socials">
                          <img src="" alt="Tik Tok" />
                          <img src="" alt="Instagram" />
                          <img src="" alt="Pinterest" />
                          <img src="" alt="Facebook" />
                      </span>
                  </div>
              </main>
          </footer>
      </>
  )
}

export default Footer
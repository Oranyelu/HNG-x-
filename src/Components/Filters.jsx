import React from 'react'

function Filters() {
  return (
      <div>
          <h1>FIlters</h1>
          <hr />
          Price Range
          <input type="checkbox" name="" id="L-H" />
          <input type="checkbox" name="" id="H-L" />
          <p>
            Gem type  
          </p>
          <input type="checkbox" name="" id="Moissanite" />
          <input type="checkbox" name="" id="Ruby" />
          <input type="checkbox" name="" id="Emerald" />
          <input type="checkbox" name="" id="Diamond" />
          <input type="checkbox" name="" id="Coloured diamonds" />
          <p>Ring style</p>
          <input type="checkbox" name="" id="Single band" />
          <input type="checkbox" name="" id="Doule band" />
    </div>
  )
}

export default Filters

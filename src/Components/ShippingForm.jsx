import React from 'react'

function ShippingForm() {
  return (
      <div><form action="POST">
          <h1>Shipping Details</h1>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Phone number' />
          <input type="text" placeholder='Address' />
          <input type="text" placeholder='City / State'/>
          <input type="text" placeholder='Zip Code (Optional)' />
          <p>Shipping Estimates: 3-5 working days</p>
          <button type="submit">Proceed ti payment</button>
      </form>
      
      </div>
  )
}

export default ShippingForm
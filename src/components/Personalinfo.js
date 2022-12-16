import React from 'react'

export default function Personalinfo() {
  return (
    <div className='per-info'>
          <div className='info-heading'>personal info</div>
          <div className='single-line'>
            <p>First Name:<span>Deep</span></p>
            <p>Last Name:<span>Patel</span></p>
          </div>
          <div className='single-line'>
            <p>Age:<span>20 years</span></p>
            <p>Nationality:<span>Indian</span></p>
          </div>
          <div className='single-line'>
            <p>Freelance:<span>Available</span></p>
            <p>Address:<span>Mumbai</span></p>
          </div>
          <div className='single-line'>
            <p>Phone:<span>+917875295787</span></p>
            <p>Lang:<span>Hin, Eng, Guj</span></p>
          </div>
     </div>
  )
}

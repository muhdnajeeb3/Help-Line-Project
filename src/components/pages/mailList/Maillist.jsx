import React from 'react'

import './Maillist.css'

function Maillist() {
  return (
    <div className='mail'>
        <h1 className='mailtitle'>Contact Us</h1>
        <span className="maildesc">We are here for you</span>
        <div className="mailinputcontainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Maillist
import React from 'react'
import { useState } from 'react';

function Form({ handleBlur, handleFocus, inputStyle, handleMonthChange, handleYearChange, handleCardNumber, handleCvv, creditCardNumber, cvv, expirationMonth, expirationYear}) {

  return (
    <div className='form-container'>
        <form className='form'>
        <div className='number'>
            <div>
             <label className='text' >Card Number</label> 
            <p className='text2'>Enter the 16-digit card number on the card</p>
            </div>

            <div class="edit-container">
           
           <div class="pen-icon">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <path d="M1.275.2l3.525 3.525-6.9 6.9H.375V7.1l6.9-6.9L8.1.275 1.275 7.1zm7.15-1.125c.2-.2.2-.525 0-.725L8.525.125c-.2-.2-.525-.2-.725 0L6.05 1.475l1.15 1.15 1.475-1.15zm-.7 1.975L2.475 8.925l-.875.1.1-.875 6.4-6.4.75.75-6.4 6.4-.875.1.1-.875L7.4.05z" fill="currentColor"/>
     </svg>
    </div>
    <span class="edit-text">  edit</span>
</div>





            </div>
            
        <div className='ccn-container'>
        <input
         type="text"
         className='ccn'
        value={creditCardNumber}
        style={inputStyle}
        placeholder='2412 - 7512 - 3412 - 3456'
         maxLength={19}
        onChange={handleCardNumber}
         />

         <img  className='mc' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAw1BMVEX////3nhvrABv/XwDuAAD/XAD/YgD2oBzrAADqABj4mwD3nRX/WADqABX/+/z+Zgb3lhj8VQb0NhL4kJjqAA797vD+9vf85Of72t381dj8zM/4wsX++O398OD97dn85MnuREf0Bhz0MDfuUlX3c3n3pqr8w3r6qjj7oxL8qC39z5PyYGb0GSnxO0L8x4P6rEL6uWb92674ub/2fYb8tln4r7P0VV/3nKP5NgD93rr9bgr8dwz6ihP3ho34QwzwJxX3TFcsd7WVAAADQUlEQVRoge2aaVeqUBSGmZLpkpVYogZpgzglNt66Tf//V3UkRbQD8hL37g/3vN9Yi7Ue9sgZtiQJCQkJCQkJCQkJCVWh45OW1+50Op7XahZ5v3vq+0EQ+P7p6c/AJ+3G+GziapphGJrW659fXHo5X9D151d3gzC0YoXDWTQKSn5B63I80TTXMZWlTNNl3zC9veHyu0/XM4a05bVs9jyM5jj/ZuwabsJNyTGM/q23/bp/PdwEp74gjJ4Q8v7jRHM54JULDO2jnX4/uLMsHjjhD+eF0fcTzclGx3K1h8R6P+LbvIHXi1nfftiJXsgwX+PYd6/1PKvX+CjYzW4oRgF07Pwp830wK4JeyNJHO9DNscbLsgzfu4/zcJfH0/iom8f2JgXNXhr/+1nWi8Nla+hns+/dItFesw9re3UbodthZt6BbOewpqp79QOIbmcU3Q0Q7hUbp1tc2zsY2/xiL+hQ3G2LU3KtHuRzZcVW1V/PCJzF/Vuzb/Zz+ilHRwmb2f4How+2K+4CqjHlSE1r7wWiW9Em+xJjO+omXIWSTrY2Uv5kggX8rbZFBx0/TIf9QoPY71tslnSg46/WbA9jK4fbbFWtQ3DZSvrs/nn5TC9pun23grcxw02O4cz0A8z0ZavZH4OG89hly81ToL6a6m0bcLDP6V9RfwVTnWs4E+j3eF1zPMW8vl3jielgrc8WTbbTg9i8OvuCg9UmL1KuAXbWDMNZtZXw+8fPi7xcvrNSb5pYrr9lsVUVy3dZ7qIdJjPkTDUMHgbSPRZyJdPrLOiY4Ww19wrmWz0HDv7VRxLYW9/z4C+Q5XYkTbFlRHay43+2mdQHkz0HDvY4eSBB6GrhOiVc/m/hOmHC2QPaUiNtMqTtlfTHQvdLZUv36hYT4OJ5sZggW0bFOybSBSTp0rl59rODgQReZtNAul2i2SjKy40i6RaZ9HCA9liE9ECI9iiM9hCQ9PiT9uCX9sib9LCf9pqD9oKH9mqL9lKP9jrz717k2jsucpkaRY2v/gpbwi/vRxVe3tOOLUjlBjZy+MjARqzKRlUsdFQl1vchHceJh3Q6/CGdoLohnVh040lLLQez2v98MEtISEhISEhISEhIaKVPh8aHw8xntKIAAAAASUVORK5CYII=" alt="" />
         <img className='mc-v' src="https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png" alt="" />

        </div>
           
   





         <div className='cvv'>
            <div className='gap'>
              <p className='text'>CVV Number</p>
        <p className='text2'>Enter the 3 or 4 digit numbers on the card</p>
        </div>

        <div className='cvv-container'>
            <input
            className='cvv-text'
            style={inputStyle}
         type="text"
        value={cvv}
        placeholder='327'
         maxLength={19}
        onChange={handleCvv}
         />

         <img className='keypad' 
         src="data:image/png;base64,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"
          alt="" />
         </div>
        
        
        </div>


     <div className='date-input'>
            <div className='gap'>
                <label className='text'>Expiry Date</label>
        <p className='text2'>Enter the expiry date on the card</p>
        </div>

        <div className='expiry'>
    <input
        type="text"
        placeholder="09"
        value={expirationMonth}
        style={inputStyle}
        maxLength={2}
        onChange={handleMonthChange}
        className='mm'
      />

     <span className='slash'>/</span> 

      <input
        type="text"
        placeholder="22"
        value={expirationYear}
        style={inputStyle}
        maxLength={2}
        onChange={handleYearChange}
        className='mm'
      />
</div>
    </div>
        
    
    <div className='number'>
        <div className='gap gap1'>
        <p className='text'>Password</p>
        <p className='text2'>Enter your Dyanmic password</p>
        </div>

        <div className='password-container'>
            <input
         type="password"
         className='cvv-text'
         />

         <img className='keypad1'
         src="data:image/png;base64,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" 
         alt="" />
         
         </div>
            
            </div>

        <button className='pay'>Pay Now</button>



        </form>
    </div>
  )
}

export default Form
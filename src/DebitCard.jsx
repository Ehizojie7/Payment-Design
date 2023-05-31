import React from 'react';


function DebitCard() {
  return (
        <div className='card-container'>
            <div className='main-card'>
                <div className='space'></div>
                <div className='space-2'>
                <div className='company'>
                    <p className='text2'>Company</p>
                    <p className='text'>Apple</p>
                </div>
    
                <div className='company'>
                    <p className='text2'>Order Number</p>
                    <p className='text'>1266201</p>
                </div>
    
        
                <div className='company'>
                    <p className='text2'>Product</p>
                    <p className='text'>MackBook Air</p>
                </div>
    
                <div className='company'>
                    <p className='text2'>VAT (20%)</p>
                    <span className='text'>$100.00</span>
                </div>
    
                </div>
                
                <div className='dot'>
                    <div className='usd'>
                    <span className='you'>You have to Pay</span>
                    <h2 className='you text'>549.<small>99</small> <span className='text2'>USD</span></h2>
                    </div>
                    <div className='icon'>
                    <img className='image1' src="data:image/png;base64,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" alt="" />
    
    
                    </div>
                   <div className='dot-dot'></div>
                   <div className='dot-dot1'></div>
            
                </div>
                    
                
                
            <div className='second-card'>
                        <div className='sc'>
                            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52i4t3VyYocxBQhw6J7U__XVDftVDJ9qxQ-l62hEk3b4YQDHzOIep&usqp=CAE&s" alt="" />
                            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbO11M1npABuz9tFr1OuYkiUs2-2cfmeaBoBXVJxyee_QOYiybdKtR&usqp=CAE&s" alt="" />
                        </div>
                        <div className='jonthan'>
                            <p className='you1'>Jonathan Micheal</p>
                            <p className='you1'>**** <span className='text'> 3456</span></p>
                        </div>
    
                        <div className='sc'>
                            <p className='text'>09/22</p>
                            <img className='image' style={{height: '35px'}} src="data:image/png;base64,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"/>
                        </div>
                        <div className='blue-div'></div>
                    </div>
    

                    <div className='circle'>

            </div>
            </div>
        
        </div>
  )
}

export default DebitCard
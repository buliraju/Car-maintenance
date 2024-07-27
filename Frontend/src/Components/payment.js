import React from 'react'

export default function Payment() {
    const blk = (v) => {
        v.target.style.backgroundColor = 'red'
        v.target.style.color = 'black'
        v.target.style.fontWeight = 'bold'
        v.target.style.border = 'none'
      }
    
      const lkb = (v) => {
        v.target.style.backgroundColor = 'black'
        v.target.style.color = 'white'
        v.target.style.fontWeight = 'normal'
        v.target.style.border = '1px solid white'
      }
  return (
    <div>
        <div className='row'>
            <div className='col-md-2 mt-5'>
                <h2 style={{color:'red', fontWeight:'bold'}}>Shipping</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4 mt-5'>
                <h5><b>Contact Information</b></h5>
                <input type='text'></input>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4 mt-5'>
                <h5><b>Shipping Address</b></h5>
                <input type='text' placeholder='Full Name'></input>
                <input type='text' placeholder='Address'></input>
                <input type='text' placeholder='City'></input>
                <input type='text' placeholder='State'></input>
                <input type='text' placeholder='Country/Region'></input>
                <input type='text' placeholder='Zipcode'></input>
                <input type='text' placeholder='Phone'></input>
            </div>
        </div>
        <div className="row mt-3">
        <div className="col-md-4">
        <button onMouseOver={blk} onMouseLeave={lkb} className="btn">Checkout</button>

        </div>
      </div>
        <div className='row mt-5'>
            <div className='col-md-12' style={{height:'80px', backgroundColor:'black', color:'white'}}>
                <h5 style={{marginTop:'22px'}}>Dyno Car Care™</h5>
            </div>

        </div>
    </div>
  )
}
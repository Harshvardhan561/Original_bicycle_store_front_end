import React from 'react'

export default function Box() {
  return (
    <div className='box1'>
      <p className='Sign_In'>
         Sign In
      </p>   
      <p className='username'>Username <p><input type="text" className='userin'  /></p></p>
      <p className='password'>Password  <p><input type="text" className='passwordin'  /></p></p>
         
      <p className='Forget_password'><a>Forget Password ?</a></p>
           
      
    </div>
  )
}

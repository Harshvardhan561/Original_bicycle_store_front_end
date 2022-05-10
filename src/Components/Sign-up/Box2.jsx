import React from 'react'

export default function Box2() {
  return (
    <div className='box2'>
       <p className='Sign_up'>
         Sign Up
       </p> 
      <p className='email'>Email <p><input type="email" className='emailin'  /></p></p>  
      <p className='username'>Username <p><input type="text" className='userin'  /></p></p>
      <p className='password'>Password  <p><input type="password" className='passwordin'  /></p></p>
    </div>
  )
}
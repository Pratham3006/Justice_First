import React from 'react'
import './Validity.css'

export default function Validity() {
  return (
    <div>
        <div className='wrapper-vd'>
        <div className='valid-box'>
            <div className='valid-items'>
            <p className='valid-child'>To Edit Your Profile Kindly Re-enter your Password</p>
            <input type='password' placeholder='Enter your Password' className='valid-child'></input>
            <button className='valid-child'>Submit</button>
            </div>

        </div>

        </div>
    </div>
  )
}


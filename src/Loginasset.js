import React from 'react'
import judge from './components/assets/judge.png'
import lawyer from './components/assets/lawyer.png'
import { Link } from 'react-router-dom'
import Lawyer from './Lawyer'

export default function Loginasset() {

  return (
    <div>
        <div className='login-class'>
            <p className='option-text'>Choose your Login Option</p>
            <div className='parent-option'>
            <div>
            <div className='option-1'>
                <p className='option-text'>Login as lawyer?</p>
                <img src={lawyer} className='option-img' />
            </div>
            <Link to="/lawyer"><button className='button'>Login</button></Link>
            </div>
            <div>
            <div className='option-2'>
             <p className='option-text'>Login as judge?</p>
             <img src={judge} className='option-img' />
             </div>
             <Link to="/judge"><button className='button'>Login</button></Link>
            </div>
            </div>

        </div>
    </div>
  )
}

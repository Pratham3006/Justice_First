import React from 'react'
import './Case.css'

export default function Case(props) {
  return (
    <div>
        <div className='parent-div-case'>
           <div className='child-case-1'>{props.case}</div>
           <div className='child-case-2'>{props.description}</div>
        </div>
    </div>
  )
}

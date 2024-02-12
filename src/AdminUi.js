import React from 'react'
import './AdminUi.css'
import { Link } from 'react-router-dom';

export default function AdminUi() {
    const storedUser = JSON.parse(localStorage.getItem('admin'));
    const name= storedUser.first_name;
    const secondname= storedUser.last_name;
    
  return (
    <div className='AdminUi-parent'>
        <div className='AdminUi-welcome'>
            <div className='welcome-parent'>
                <div className='text-open'>Welcome</div>
                <div className='text-close'>{name} {secondname}</div>
            </div>

        </div>
        <div className='task-option'>
            <div className='task-1'>
                <Link to="/Admin"><button className='selection-button'>Create accounts?</button></Link>

            </div>
            <div className='task-2'>
                <Link to="/PIL"><button className='selection-button'>Research a Case?</button></Link>
            </div>

        </div>
        <div className='task-option'>
            <div className='task-4'>
                <Link to="/AdminForm"><button className='selection-button'>Create Public Cases?</button></Link>

            </div>
            <div className='task-3'>
                <Link to="/Grievances/0"><button className='selection-button'>Check Grievances?</button></Link>
            </div>

        </div>
    </div>
  )
}

import React from 'react'

export default function Navigation() {
  return (
    <div>
         <ul>
      <li>
        <Link to="/judge">Judge</Link>
      </li>
      <li>
        <Link to="/lawyer">Lawyer</Link>
      </li>
      <li>
        <Link to="/Admin">Admin</Link>
      </li>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/lawyerLogin">LoginUi</Link>
      </li>
      <li>
        <Link to="/faqs">LoginUi</Link>
      </li>
      <li>
        <Link to="/ReleaseNotes">LoginUi</Link>
      </li>
    </ul>
    </div>
  )
}

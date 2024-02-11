import React from 'react'

export default function Data1(props) {
  return (
    <tr>
      <td>{props.srNo}</td>
      <td>{props.date}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.complains}</td>
    </tr>
  )
}

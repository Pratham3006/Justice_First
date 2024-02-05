import React from 'react'

export default function Data(props) {
  return (
    <tr>
      <td>{props.srNo}</td>
      <td>{props.date}</td>
      <td>{props.caseID}</td>
      <td>{props.caseInfo}</td>
      <td>{props.judgeAssigned}</td>
    </tr>
  )
}

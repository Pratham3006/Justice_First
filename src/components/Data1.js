import React from "react";

export default function Data1(props) {
  return (
    <tr>
      <td>{props.srNo}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.message}</td>
      <td>{props.date}</td>
      {!props.status ? (
        <td>
          <button onClick={props.onAccept}>Accept</button>
          {" or "}
          <button onClick={props.onReject}>Reject</button>
        </td>
      ) : props.status === 1 ? (
        <td>Resolved</td>
      ) : (
        <td>Rejected</td>
      )}
    </tr>
  );
}

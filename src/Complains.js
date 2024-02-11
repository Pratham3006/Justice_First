import React, { useState, useEffect } from "react";
import "./History.css";
import Data1 from "./components/Data1";
import { convertDate } from "./utils";
import { Link, useParams } from "react-router-dom";

export default function Complains() {
  const storedUser = JSON.parse(localStorage.getItem("admin"));
  const name = storedUser?.first_name;
  const lastName = storedUser?.last_name;

  const { status } = useParams();

  const [complaints, setComplaints] = useState(null);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
          `http://localhost:5000/complaints/get-all-complaints/${status}`,
          requestOptions
        );
        const result = await response.json();

        // Set the data in state
        setComplaints(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the API when the component mounts
    fetchData();
  }, [status]); // Ensure useEffect runs whenever status changes

  // Function to handle accepting or rejecting a complaint
  const handleAcceptReject = async (complaintId, newStatus) => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(
        `http://localhost:5000/complaints/update-complaint-status/${complaintId}/status/${newStatus}`,
        requestOptions
      );

      const result = await response.json();

      if (result.status) {
        window.location.reload();
      }
      alert(result.message);
    } catch (error) {
      console.error("Error updating complaint status:", error);
    }
  };

  return (
    <div>
      <div className="History">
        <h1
          style={{ display: "flex", justifyContent: "center" }}
          className="Font-History"
        >
          Grievances sent to {name} {lastName}{" "}
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* Link to view pending complaints */}
          <Link to="/Grievances/0" style={{ textDecoration: "none" }}>
            View Pending Complaints
          </Link>
          {/* Link to view resolved complaints */}
          <Link to="/Grievances/1" style={{ textDecoration: "none" }}>
            View Resolved Complaints
          </Link>
          {/* Link to view rejected complaints */}
          <Link to="/Grievances/2" style={{ textDecoration: "none" }}>
            View Rejected Complaints
          </Link>
        </div>
        <div className="Table">
          <div>
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Sr. No</th>
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th className="desc">Complain</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                  <th style={{ textAlign: "center" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints?.map((complaint, index) => (
                  <Data1
                    key={index}
                    srNo={index + 1}
                    name={complaint?.name}
                    email={complaint?.email}
                    message={complaint?.message}
                    date={convertDate(complaint?.created_date)}
                    id={complaint?.id}
                    status={complaint?.status}
                    onAccept={() => handleAcceptReject(complaint.id, 1)}
                    onReject={() => handleAcceptReject(complaint.id, 2)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

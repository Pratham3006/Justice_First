import React, { useState, useEffect } from "react";
import "./History.css";
import Data1 from "./components/Data1";
import { convertDate } from "./utils";

export default function Complains() {
  const storedUser = JSON.parse(localStorage.getItem("lawyer"));
  const name = storedUser?.first_name;
  const lastName = storedUser?.last_name;
  const username = storedUser?.username;
  const usertype = "lawyer";

  const [cases, setCases] = useState(null);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
          `http://localhost:5000/cases/get-all-cases?user_type=${usertype}&&username=${username}`,
          requestOptions
        );
        const result = await response.json();

        // Set the data in state
        setCases(result.data);
        console.log(cases);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the API when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <div className="History">
        <h1
          style={{ display: "flex", justifyContent: "center" }}
          className="Font-History"
        >
          Grievances sent to {name} {lastName}{" "}
        </h1>
        <div className="Table">
          <div>
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Sr. No</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                  <th style={{ textAlign: "center" }}>Username</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th className="desc">Complain</th>
                </tr>
              </thead>
              <tbody>
                {cases?.map((singleCase, index) => (
                  <Data1
                    key={index}
                    srNo={index + 1}
                    date={convertDate(singleCase?.created_date)}
                    username={singleCase?.case_id}
                    email={singleCase?.case_text}
                    complain={"Judge " + singleCase?.judge_name}
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

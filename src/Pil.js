import React, { useEffect, useState } from "react";
import "./Pil.css";
import File from "./components/File";

export default function Pil() {
  const [pils, setPils] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(`http://localhost:5000/pils/get-all-pils`, requestOptions);

        const result = await response.json();

        setPils(result.data);
        console.log(pils);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Pil-head">
      <h1 className="Pil-header">Case Updates and acknowledgements</h1>

      {pils?.map((pil, index) => (
        <File {...pil} key={index} />
      ))}
    </div>
  );
}

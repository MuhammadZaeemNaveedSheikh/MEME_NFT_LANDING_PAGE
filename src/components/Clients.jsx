import React from "react";
import clients1 from "../assets/2829.png";
import clients2 from "../assets/2830.png";
import clients3 from "../assets/2865.png";
import clients4 from "../assets/2884.png";
import clients5 from "../assets/2890.png";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" style={{width:'80%',height:'100%'}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

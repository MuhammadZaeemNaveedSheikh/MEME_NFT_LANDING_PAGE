import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/2217.png";
import release2 from "../assets/2823.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
          In a world I’m which ETH nose dives and it’s value is equal<br></br> to that or shit, our project comes to save the day. 
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
        
      </div>
    </div>
  );
}

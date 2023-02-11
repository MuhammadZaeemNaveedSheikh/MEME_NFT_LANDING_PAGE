import React from "react";
import Card from "./Card";
import super1 from "../assets/2217.png";
import super2 from "../assets/2217.png";
import super3 from "../assets/2217.png";
import super4 from "../assets/2217.png";
import video from '../assets/background.mp4';
export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Why do we need memes to save NFTs?</h2>
        <p className="description">
        Memes are a sign of hope for a community which has suffered for far to long.Memes make you laugh, memes make your day,memes love you.DID WE TELL MEMES WILL ALSO BE LAUNCHING AN OFFICIAL MAGAZINE?? SHUSHHHHH
        </p>
      </div>
      <div className="cards">
      <video src={video} width="60%" height="40%" controls autoPlay></video>

      

      </div>
    </div>
  );
}

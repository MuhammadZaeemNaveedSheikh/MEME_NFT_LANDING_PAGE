import React from "react";
import signup from "../assets/5130.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <h1 className="sub-title"> ROAD MAP?</h1>
          <h2 className="title">Those of you searching for a Roadmap...</h2>
          <h3 className="description">
           What are you doing with your life? We don’t do that lame shit here! We gave you utility, we gave you some memes, and now you want a road map. Grow up already! anyways.. we have huge plans for launching the MIGHTY MEME MAGAZINE, only exclusively availaible to the best of the best memers in the Memeland. The fuck you waiting for then? go hop on our discord and start engaging with the homies asap! THIS IS A LIFE AND DEATH SITUATION!
          </h3>
          <button style={{fontSize:'25px',fontWeight:'bolder'}}>JOIN DISCORD ASAP</button>
          <button style={{fontSize:'25px',fontWeight:'bolder'}}>FOLLOW US TWITTER</button>
          <button style={{fontSize:'25px',fontWeight:'bolder'}}>GET RICKROLLED</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" style={{width:'80%',height:'100%'}}/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

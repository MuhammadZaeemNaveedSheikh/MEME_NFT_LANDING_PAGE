import React from "react";
import home from "../assets/4895.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="sub-title">Memes Will Save NFTs</h1>
          <h2 className="title">Say no to the crumbling bear market</h2>
          <p className="description">
          MemesWillSaveNfts, is a project looking to help get the web3 family out of depression.
          </p>
          <button style={{fontSize:'18px',fontWeight:'bolder'}}>MEME IT</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" style={{width:'80%',marginBottom:'100px',height:'100%'}} />
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

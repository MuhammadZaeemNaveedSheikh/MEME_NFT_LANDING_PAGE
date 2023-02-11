import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/5141.png";
import release2 from "../assets/a.jpeg";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h1 className="title">MemesWillSaveNfts</h1>
          <h2 className="description">
          MemesWillSaveNfts, is a project looking to help get the web3 family of of depression. In a world I’m which ETH nose dives and it’s value is equal to that or shit, our project comes to save the day.
          </h2>
          <h2 className="description">
          The artwork which contains psychopathic fat dude intends on being a sign of hope for a community which has suffered for far to long. Through our FreeMint we want everyone to play a role in reviving NFTs. 
          </h2>
          <h2 className="description">Our project is unlike many others, we provide a type of utility which has not been given by any project, a Meme Magazine which will make you laugh every month, this magazine will become a source of income to help sustain your life style. MemesWillSaveNfts will transfer this dead market!!!</h2>
          <a href="#" className="link">
          MEME IT <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release"  style={{width:'70%',height:'100%'}}/>
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <img src={release2} />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h1 className="title">The utility no one offers..</h1>
          <h2 className="description">
           Memes are gonna make you laugh. Memes are gonna make your day. Memes are gonna get you rolling on the floor, lauging your ass of in this absolutely depression market condition. Who does that? do those funking monkeys do that? NO! but we will! Life is a joke and life is a meme, grow up!
          </h2>
          <h2 className="description">
           We will be launching our official comic magazine in near future. YES! you heard that right. We dont want to overpromise and rug tf out of you so we will only promise what we can commit to. NO BULLSHIT!
          </h2>
          <h3 className="description">Whats stopping you from #memeit now? </h3>
          <a href="#" className="link">
            MEME IT <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            
          </div>
          <p>Hit us up on our socials</p>
          <ul style={{cursor:'pointer'}}>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links" >
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4 >{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}  style={{cursor:'pointer'}}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span  style={{cursor:'pointer'}}>&copy; Copyright 2022 Memes Will Save NFTs</span>
        <span>Minting August 2022</span>
      </div>
    </footer>
  );
}

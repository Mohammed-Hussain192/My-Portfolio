import React, { useRef } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import hussain from '../assets/files/hussain.pdf'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);



function Navbar(props) {
 
  useGSAP(()=>{
    gsap.fromTo(".a", { y: -1000,opacity:0 }, { y:0, duration: 0.5,opacity:1,stagger:0.1,delay:3});
  })
  return (
    <div className='div'>
     
      <div  className="part2">
      <Link className='a' to="/">🏚️Home</Link>
      <Link className='a' to="/about">🧑About</Link>
      <Link className='a' to="/Projects">📂Projects</Link>
      <a className='a' href={hussain} download="resume">📄Resume</a>
      <Link className='a' to="/Contact">📧 Get-in-Touch</Link>
      
      </div>
    </div>
  )
}

export default Navbar

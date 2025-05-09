


import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import mern from '../assets/mern.png'
import mongo from '../assets/mongo.png' 
import express from '../assets/express.jpeg'
import Node from '../assets/Node.png'
import react from '../assets/react.png'
import me from '../assets/me.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import Loader from '../components/loader'

import '../styles/Home.css'



function Home() {
  
  useGSAP(()=>{
    gsap.fromTo(".p", { x:200,opacity:0 }, { x:0, duration:1,opacity:1 ,delay:3});
    gsap.fromTo(".my", { x:-200,opacity:0 }, { x:0, duration:1,opacity:1,delay:3});
    gsap.fromTo(".as", { y:100,opacity:0 }, { y:0, duration:1,opacity:1,delay:3});
    gsap.fromTo(".bt",{ y:100,opacity:0 }, { y:0, duration:1,opacity:1,delay:3})
    gsap.fromTo(".cname", { y:-200,opacity:0 }, { y:0, duration:0.5,opacity:1,stagger:0.2,delay:3});
    gsap.fromTo(".card", { y:200,opacity:0 }, { y:0, duration:0.5,opacity:1,stagger:0.2,delay:3});
    gsap.fromTo(".Homecont", { y:-150, height:"0", }, { y:0,height:"100vh", duration:1, delay:2});


  
  })
  
  
  return (
    <>
    <Loader name="MOHAMMED HUSSAIN" title="INTRODUCING...The Legend"  />
    <div className='Homecont' >
    
      
      <Navbar />
      <div className="home">
          <div className="first">
              <div  className="info">
                <p className='p'>HELLO!</p>
                <p className='my'>I'm Mohammed Hussain</p>
                <p className='as'>Aspiring MERN STACK Developer <span>||</span> Python Developer</p>
               <button className='bt'> <Link to="/about">Explore more</Link></button>

              </div>
              
          </div>
        <div className="second">
            <div id='one' className="card">
              <p className='cname'>M</p>
              <div className="content">
                Mongo DB
              </div>
            </div>
            <div id='two' className="card">
              <p className='cname'>E</p>
              <div className="content">
                Exprees Js
              </div>
            </div>
            <div id='three' className="card">
              <p className='cname'>R</p>
              <div className="content">
                React Js
              </div>
            </div>
            <div id='four' className="card">
              <p className='cname'>N</p>
              <div className="content">
                Node Js
              </div>
            </div>
        </div>
      </div>
  
    </div>
    </>
  )
}

export default Home

import React from 'react'
import "../styles/load.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


function Loader(props) {
    useGSAP(()=>{
        gsap.fromTo(".loadcont",{y:0},{y:-200,display:"none",duration:2,delay:3.5})
    })
  return (
    <div className='loadcont'>
            <h2>{props.title}</h2>
            <h1>{props.name}</h1>
            <p className='here'>Here you go......</p>

    </div>
  )
}

export default Loader

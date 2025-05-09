import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/contact.css'

import { Phone, Mail, Linkedin, Github } from "lucide-react";
import axios from 'axios'
import {useState,useRef,useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


function Contacts() {
 
  useGSAP(()=>{
    gsap.fromTo(".Homecont",{height:0,opacity:0},{height:"100vh",opacity:1,duration:1,})
    gsap.fromTo("#input",{x:101,opacity:0},{x:0,opacity:1,duration:0.5,stagger:0.2 ,delay:1})
    gsap.fromTo("#btn",{x:-101,opacity:0},{x:0,opacity:1,duration:0.5,stagger:0.2,delay:1})
    gsap.fromTo(".hee",{x:-1001,opacity:0},{x:0,opacity:1,duration:1.5,delay:1})
   
  })
  

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addUser", formData)
        
      
         
        
          alert(response.data.message);
        
          
          
          console.log(response.data.message)// Show success message
       
          setFormData({ name: "", email: "", message: "" });
          
        
        

        
        
        

      

      }
      
     
     catch (error) {
      alert("Error adding user");
    }
  };
 
 
  
 
  return (



    <div className='Homecont'>
      <Navbar />
     <div  className="cont">
   
      <form onSubmit={handleSubmit}  >
        <h2 className='co'>Contact </h2>

        <input  type="text" name="name" value={formData.name} id="input" onChange={handleChange} placeholder='Enter Your name' />

        <input type="email" name="email" value={formData.email} onChange={handleChange} id="input" placeholder='Enter Your Email' />

        <textarea  name="message" value={formData.message} onChange={handleChange} placeholder='Enter your Message' id="input"></textarea>

        <input  type="submit" name="" id="btn" />

        <p className='he'>More To Contact ▼</p>
        <div className="emo">
        <p className='do'><Mail /> <span>sahilsahu7816@gmail.com</span></p>
        <p  className='do'><Phone /> <a href="tel:9019274981">9019274981</a></p>
        <p className='do'><Linkedin /> <a href="https://www.linkedin.com/in/mohammed-hussain-484026260/" target="_blank" rel="noopener noreferrer">Mohammed Hussain</a></p>
        <p className='do' ><Github /> <a href="https://github.com/Mohammed-Hussain19" target="_blank" rel="noopener noreferrer">Mohammed-Hussain19</a></p>
        </div>
        
      </form>
      <div className="join">
        <h1 className='j'>Join us</h1>
        <p className='hee'>"Alone we can do so little; together we can do so much." <br /> – Helen Keller</p>
      </div>
     </div>
    </div>
  )
}

export default Contacts

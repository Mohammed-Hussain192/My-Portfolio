import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/project.css'


function Home() {
  return (
    <div className='procont'>
      
      <Navbar/>
      <div className="main">
        <p className='he1'>Projects</p>
        <div className="firsts">
                <p className='nu'>🔹 Pack-Me (E-commerce Bag Store)</p>
                  📌 Description: A modern and responsive e-commerce platform for buying bags online with a seamless shopping experience .<br />
                  📌 Tech Stack: React, Node.js, MongoDB, Express.js, GSAP <br />
                  📌 Features: <br />
                  ✅ User authentication & secure checkout <br />
                  ✅ Product filtering & search functionality <br />
                  ✅ Modern UI with smooth animations <br />
                  <a blank="true" href="">📂 GitHub</a>
        </div>
        <div className="seconds">
        <p className="nu">🔹 Jarvis AI (Virtual Assistant)</p>
        📌 Description: A Python-based voice assistant inspired by J.A.R.V.I.S. that helps with tasks like opening applications, fetching information, and more. <br />
        📌 Tech Stack: Python, Speech Recognition, AI APIs <br />
        📌 Features: <br />
        ✅ Voice-controlled assistant for automation <br />
        ✅ Can search the web, send emails, and more <br />
        ✅ Customizable commands & responses <br />
        <a blank="true" href="">📂 GitHub</a>
        
        </div>
        <div className="thirds">
                      <p className="nu">🔹 TimePass AI (Fun AI Assistant for Kids)</p>
                      📌 Description: An AI-based chatbot built for kids to interact and have fun. It provides simple responses and can assist with basic tasks. <br />
                      📌 Tech Stack: React (Web), Python (Console), API Integration <br />
                      📌 Features: <br />
                      ✅ Web-based AI chatbot with API integration <br />
                      ✅ Console version built using Python <br />
                      ✅ Engaging and fun responses for kids <br />
                      <a blank="true" href="">📂 GitHub</a>
        </div>
        <div className="fourths">
        <p className="nu">🔹 MERN Stack Portfolio</p>
        📌 Description: A personal portfolio built using the MERN stack to showcase projects, skills, and achievements. <br />
        📌 Tech Stack: MongoDB, Express.js, React, Node.js,GSAP. <br /> 
        📌 Features: <br />
        ✅ Dynamic and responsive UI/UX  <br />
        ✅ Interactive UI with GSAP-powered animations  <br />
        ✅ Project showcase with live demos & GitHub links  <br />
        ✅ Contact form with backend integration  <br />
        <a blank="true" href="">📂 GitHub</a>
        
        </div>
        <div className="fifths">
      <p className="nu">  🔹 Certification Platform (Work in Progress)</p>
        📌 Description: A web platform where users can solve coding questions and earn certifications. <br />
        📌 Tech Stack: Node.js, Express, MongoDB, EJS (Frontend), considering React <br />
        📌 Features: <br />
        ✅ User authentication & progress tracking  <br />
        ✅ Dynamic problem-solving environment <br />
        ✅ Automated certification system <br />
        <a blank="true" href="">📂 GitHub(Coming Soon)</a>
        </div>
      </div>
  
    </div>
  )
}

export default Home
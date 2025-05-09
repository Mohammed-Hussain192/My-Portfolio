import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.css'
import '../components/Footer'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from '../components/loader';
gsap.registerPlugin(useGSAP);

function About() {
  useGSAP(()=>{
    gsap.fromTo(".Aboutcont",{opacity:0},{opacity:1,duration:1 ,delay:2})
    gsap.fromTo(".contt div", { x:100, }, { x:0, duration:1,stagger:0.5 ,delay:3});
   

  
  })
  return (
    <>
    <Loader name="About Me" title=""  />
    <div className='Aboutcont'>
      <Navbar />
      <div className="contt">
          <div className="about">
            <p className='he'>About Me 🙋‍♂️</p>
            <p className='parah'>Hi, I'm Mohammed Hussain  , A passionate Full-Stack Developer with a flair for creating innovative solutions that blend functionality with creativity. Whether it’s building dynamic web experiences with React and GSAP animations or crafting intelligent systems with Python AI, I thrive on turning ideas into reality.

            I’ve had the privilege of working on diverse projects, from developing 'Jarvis AI' and the fun, interactive 'Time Pass AI' for kids to crafting practical platforms like 'Pack-Me', a seamless bag-buying site. I'm also diving deep into backend development using Node.js and EJS, creating platforms where users can sharpen their skills and earn certifications.

            Beyond coding, I bring a competitive spirit to everything I do—I’ve secured 1st place in Front-end Fusion and 3rd place in the Zero Error competition at the V-QUANTUM Tech Fest. These experiences fuel my drive for excellence, both on the screen and off (you’ll also catch me playing cricket or volleyball in my free time!).

            My goal? To build impactful digital solutions that inspire, engage, and make life just a little easier.

            Let’s build something amazing together.</p>
          </div>
          <div className="edu">
            <p className='he'>Education 🎓</p>
            <p className="para">
            📍 Bachelor of Computer Applications (BCA)
              Vidya Vahini First Grade College, Tumkur <br />
              2022 – Present <br />

              Key Highlights: <br />
              ✔️ Gained expertise in Full-Stack Development, AI, and Data Analysis <br />
              ✔️ Earned certifications from NASSCOM, Microsoft, Infosys, and Wadhwani Foundation<br />
              ✔️ Achieved 1st place in Front-end Fusion and 3rd place in Zero Error (C Programming) at V-QUANTUM Tech Fest
              <br />
            </p>
            <br />
            <p className="para">
            📍 Pre-University Course (51%) <br />
            Subhash Pre UNiversity College. Koratagere, Tumkur  <br />
            Year of Completion: [2022]  <br />

            Key Highlights:
            <br />
            ✔️ Focused on Computer Science and Mathematics  <br />
            ✔️ Developed a strong foundation in programming basics and problem-solving  skills
            </p>
            <p className="para">
            📍 Secondary School Leaving Certificate (69%) <br />
              Zainabiya School Tumkur <br />
              Year of Completion: [2020] <br />

              Key Highlights: <br />
              ✔️ Built strong fundamentals in Science, Mathematics, and Technology <br />
              ✔️ Participated in various tech and coding competitions <br />
            </p>
          </div>
          <div className="skills">
            <p className="he">  Skills & Technologies 🛠️</p>
            <p className="parae">
            <strong>Frontend</strong>: React, GSAP, EJS, HTML, CSS, JavaScript <br />
            <strong>Backend</strong>: Node.js, Express.js, Python  <br />
            <strong>Database</strong>: Mongo DB, MySQL<br />
            
            <strong>Tools & Platforms</strong>: GitHub, VS Code, Postman  <br />
            <strong>Other Skills</strong>: API Integration, Problem-Solving, Debugging <br />
            
            </p>
          </div>
          <div className="cert">
            <p className="he">🏆 Achievements & Certifications</p>
            <div className="paraa">
            1) Data Analyst Certification – NASSCOM Foundation & Microsoft <br />
            2) AI Certification – [Issuing Authority]  <br />
            3) Python Completion Certificate – Infosys Springboard  <br />
            4) Problem-Solving Certificate – HackerRank  <br />
            5) Employability Skills Certificate – Wadhwani Foundation  <br />
            6) st Place – Front-end Fusion at V-QUANTUM Tech Fest <br />
            7) 3rd Place – Zero Error Competition (C Programming)
            </div>
          </div>
      </div>
   

    </div>
    </>
  )
}

export default About

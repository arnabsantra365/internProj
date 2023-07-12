import React from 'react'
import Rectangle from './Rectangle'
import '../Page-3/styles/Testpage.css'
export default function Testpage() {
  let data=[
    {className:'grid-item one',height:'60vh', width:'45vw', backgroundColor:'rgba(233, 92, 11, 0.938)' ,containerData:'Explore career options using Personalized AI Modules', border:'2px black solid' ,borderRadius:'20px', position:'relative', margin:''},
    {className:'grid-item two',height:'25vh', width:'', backgroundColor:'rgb(23, 221, 23)' ,containerData:'Decide your dream Career from all career options', border:'2px black solid' ,borderRadius:'20px', position:'relative', margin:''},
    {className:'grid-item three',height:'32vh', width:'', backgroundColor:'rgb(29, 232, 232)' ,containerData:'Achieve Dream Career', border:'2px black solid' ,borderRadius:'20px', position:'relative', margin:''},
    {className:'grid-item four',height:'', width:'', backgroundColor:'palevioletred' ,containerData:"Guidance from IIT,IIM's Mentors", border:'2px black solid' ,borderRadius:'20px', position:'relative', margin:''},
    {className:'grid-item five',height:'', width:'', backgroundColor:'blue' ,containerData:'Create Your Dream Career Profile', border:'2px black solid' ,borderRadius:'20px', position:'relative', margin:''},
  ]
  return (
    <div className='main'>
    <h1 id="first">OUR SMART FEATURES</h1>
    <h2>AI-Powered tools for<br/>Personalized career guidance</h2>
    <div className="grid-container">
      {
        data.map((link)=>(
          <Rectangle clsName={link.className} ht={link.height} wd={link.width} bgColor={link.backgroundColor} word={link.containerData} 
          border={link.border} borderRd={link.borderRadius} pos={link.position} margin={link.margin}/>
        ))
      }
    </div>
  </div>
  )
  
}

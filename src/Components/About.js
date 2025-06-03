import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >En savoir plus sur <b>moi</b>!</h1>
          <p>
            Bonjour, je m'appelle <b>MOUKAM HERMAN</b> et je vie a <b>Yaounde-Melen</b>.
            Je suis un <b>développeur web MERN stack</b> et un étudiant en dernière année poursuivant un <b>BTech en informatique</b>. <br/><br/>
            J'ai effectué un stage en tant que <b>développeur logiciel</b> chez GoalFi, une startup fintech.
            J'aime créer des projets originaux avec des designs élégants, vous pouvez voir certains de mes travaux dans la section projets.<br/><br/>
            Je suis <b>ouvert</b> à de nouvelles collaborations ou opportunités où je peux contribuer et grandir. 
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Compétences professionnelles</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='n8n' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='aws'/>
        
      </div>
    </>
  )
}

export default About
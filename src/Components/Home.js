import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Bonjour!</h1>
          <h1>je suis <b>MOUKAM HERMAN</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Présentation <b>rapide</b></h1>
          <p>
            J'aime le processus de transformer une idée brute en site web ou produit 
qui impacte les vies. 
Je souhaite faire des projets qui me challengent en tant que développeur et dont je peux 
être fier.<br /><br />
            Je suis fluide en <b>javascript</b> et je connais un peu de <b>Python</b>. Je travaille actuellement sur quelques 
projets avec la <b>MERN</b> stack.<br />
Je prévois d'apprendre <b>Next.js</b>, <b>Three.js</b> et <b>n8n</b> prochainement. <br /><br />
            J'adore le <b>café</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    elegance_beauteDesc : "Un site vitrine moderne pour un salon de beauté, présentant les différents services de soins, les horaires d'ouverture, les tarifs et les prestations. Ce site web responsive a été créé avec tailwind pour une expérience utilisateur optimale. J'ai également appris à héberger mon projet sur GitHub et à le déployer via GitHub Pages.",
    elegance_beautegGithub : "",
    elegance_beautegWebsite : "https://beaty-room.onrender.com",

    Power_fitDesc : "Un site vitrine pour une salle de sport moderne, présentant les différentes installations, les horaires d'ouverture, les tarifs et les programmes d'entraînement. Ce site web interactif permet aux visiteurs de s'inscrire en ligne et de réserver des cours de fitness.",
    Power_fitGithub : "",
    Power_fitWebsite : "https://power-fit.onrender.com",

    app_boutiqueDesc:"Une application web de gestion de boutique électronique complète qui permet aux commerçants de gérer leur inventaire, suivre les ventes, gérer les commandes et analyser les performances commerciales. Cette application utilise des API modernes et des variables d'environnement pour une gestion sécurisée et efficace des données.",
    app_boutiqueGithub:"",
    app_boutiqueWebsite:"https://site-de-e-commerce-2-0.onrender.com",
    
    Resto_chicDesc:"Une application web innovante de gestion de restaurant permettant aux propriétaires de gérer les réservations, suivre l'inventaire, générer des rapports de ventes et optimiser les opérations de cuisine grâce à des analyses en temps réel.",
    Resto_chicGithub:"",
    Resto_chicWebsite:"https://restau-chic.onrender.com",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
{/* 
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a> */}

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
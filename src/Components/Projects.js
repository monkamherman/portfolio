import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mes <b>Projets</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Resto_chic" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="app_boutique" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Power_fit" />
        <ProjectBox projectPhoto={TindogImage} projectName="elegance_beaute" />
      </div>

    </div>
  )
}

export default Projects
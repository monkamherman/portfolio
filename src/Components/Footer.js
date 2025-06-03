import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by MH2pro</h4>
      <h4>Copyright &copy; 2025 MH2pro</h4>
      <div className='footerLinks'>
        <a href="https://github.com/DevanshSahni" target='_blank'><FaGithub/></a>
        <a href='mailTo:herman.moukam5@gmail.com' target='_blank'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer
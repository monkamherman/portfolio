import React from 'react';
import {FaGithub} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by MH2pro</h4>
      <h4>Copyright &copy; 2025 MH2pro</h4>
      <div className='footerLinks'>
        <a href="https://wa.me/237658852731" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href='mailTo:herman.moukam5@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer
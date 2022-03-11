import React from 'react';
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram, FaLinkedin,FaGithub,FaTelegram } from "react-icons/fa";

const Solo9= () => {
  return (
    <div className='last-section'>
     <footer >
         <div className='footer-container'>
         <img  src='https://syscoin.org/imgs/syscoin-logo.svg ' style={{width:'185px'}}/>
         <div className='div-block'>
             <ul role='list'>
                 <li>
                     <a  href='#' className='footer-link-2'>Get SYS</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>Github</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>Research & Whitepapers</a>
                 </li>
             </ul>
         </div>

         <div className='div-block'>
             <ul role='list'>
                 <li>
                     <a  href='#' className='footer-link-2'>Discord</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>Telegram</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>Twitter</a>
                 </li>
             </ul>
         </div>

         <div className='div-block'>
             <ul role='list'>
                 <li>
                     <a  href='#' className='footer-link-2'>News</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>About</a>
                 </li>
                 <li>
                     <a href='#' className='footer-link-2'>Contact</a>
                 </li>
             </ul>
         </div>

        
         </div>
         <div className='set-footer-flex'>
         <div className='socials'>
         <div className='copyright'> Syscoin. All rights reserved © 2022</div>
             <a href='#'> <FaFacebook className='fb' /> </a>
             <a href='#'> <FaGoogle className='google' /> </a>
             <a href='#'> <FaYoutube className='yout' /> </a>
             <a href='#'> <FaInstagram className='insta' /> </a>
             <a href='#'> <FaLinkedin className='linked' /> </a>
             <a href='#'> <FaGithub className='git' /> </a>
             <a href='# ' className=''> <FaTelegram className='tele' /> </a>
         </div>
       <br />
         </div>
     </footer>

    </div>
  )
}

export default Solo9 
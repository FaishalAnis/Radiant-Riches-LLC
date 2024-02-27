import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import './footer.scss';

const Footer = () => {
  return (
    <div className='mainf'>
        <div className= 'catego'>
            <ul>
                <li>CATEGORIES</li>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Date Center</li>
                <li>Robotic-Automation</li>
            </ul>
            <ul>
                <li>CONTACT</li>
                <li>Contact</li>
                <li>Terms Of Service</li>
                <li>Coategories</li>
                <li>About</li>
            </ul>
            <ul>
                <p>United States <RiArrowDropDownLine size={40}/></p>
                
            </ul>
        </div>       
    </div>
  )
}

export default Footer

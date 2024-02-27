import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";



import './main.scss'
const Main = () => {
  return (
    <>
    <div className='alignment'>
    <div className='main'>
      <h1>Best Website builders in the US</h1>
    </div>
    <div className="thin-grey-line"></div>

    <div className='box1'>
        <ul>
            
            <li> <CiCircleCheck/> Last Updated  -  Februaryy 22, 2020 </li>
            <li><CiCircleInfo/> Avertising Disclosure</li>
        </ul>
        <ul>
            <li>Top Relevent <RiArrowDropDownLine size={20}/></li>
        </ul>
    </div>
    <br/>
    <div className="thin-grey-line"></div>

    <div className='box2'>
        <ul>
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
        </ul>
    </div>
    <div className='box3'><ul>
        <li>Home <FaChevronRight /> </li>

        <li> Hosting for all <FaChevronRight /> </li>

        <li> Hosting <FaChevronRight /> </li>

        <li> Hosting6 </li> 

        <li> <FaChevronRight />   Hosting5</li>

        </ul></div>
    </div>
    <br/>
    
    </>
  )
}

export default Main

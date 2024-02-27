import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Nav.scss'
const Nav = ({}) => {
   

  return (
    <>
    <div className='free'>
    <div className='main_header'>
        <div className='container'>
            <div className='search_box'>
                <div className='icon'><CiSearch/></div>
                <input type='text' />
            </div>
        </div>
    </div>
    <div className='header'>
        <ul>
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's deals</li>

        </ul>
    </div>
    </div>
    </>
  )
}

export default Nav

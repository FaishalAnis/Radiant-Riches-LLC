import React from 'react'
import './content.scss'
import "./App.scss";
import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";

import { CiCircleCheck } from "react-icons/ci";

import myImage from "./assets/images.jpg";

function App() {
  return (
    <>
      <div className='outer-container'> 
      <div className="containe">
      <div className="best-choices"><CiTrophy/> Best Choices</div>
      <div className="best">1</div>

        <div className="left">
          <img src={myImage} alt="image" />
          <p className="builder-title">Builder 1</p>
        </div>
        <div className="mid-content">
          <p className="text">
            <b>WixPro 72-Inch Responsive Website Builder- </b>
            <span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </span>
          </p>
          <p className="main-highlight-title">
            <b>Main highlights</b>
            <br></br>
          </p>
          <p className="main-highlight-text text">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>

          <p className="show-more">show more</p>
        </div>
        <div className="right">
          <div className="rating-container">
            <p className="rating">9.8</p>
            <div className="other-rating-comp">
              <p className="comment">Exceptional</p>
              <p className="stars">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <button className="cta">View</button>
        </div>
      </div>
      </div>
      <div className='outer-container'> 
      <div className="containe">
      <div className="best-choices"><IoDiamondOutline/> Best Choices</div>
      <div className="best">2</div>
  
        <div className="left">
          <img src={myImage} alt="image" />
          <p className="builder-title">Builder </p>
        </div>
        <div className="mid-content">
          <p className="text">
            <b>SiteCraft 68-Inch Ultimate Web Design Studio-</b>
            <span>
            Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
            </span>
          </p>
          <p className="main-highlight-title">
            <b>Main highlights</b>
            <br></br>
          </p>
          <p className="main-highlight-text text">
          [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
          </p>

          <p className="show-more">show more</p>
        </div>
        <div className="right">
          <div className="rating-container">
            <p className="rating">9.5</p>
            <div className="other-rating-comp">
              <p className="comment">Exceptional</p>
              <p className="stars">⭐⭐⭐⭐</p>
            </div>
          </div>
          <button className="cta">View</button>
        </div>
      </div>
      </div>
      <div className='outer-container'> 
      <div className="containe">
      <div className="best">3</div>
        <div className="left">
          <img src={myImage} alt="image" />
          <p className="builder-title">Builder 1</p>
        </div>
        <div className="mid-content">
          <p className="text">
            <b>WixPro 72-Inch Responsive Website Builder- </b>
            <span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </span>
          </p>
          <p className="main-highlight-title">
            <b>Main highlights</b>
            <br></br>
          </p>
          <p className="main-highlight-text text">
          [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
          </p>

          <p className="show-more">show more</p>
        </div>
        <div className="right">
          <div className="rating-container">
            <p className="rating">9.8</p>
            <div className="other-rating-comp">
              <p className="comment">Exceptional</p>
              <p className="stars">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <button className="cta">View</button>
        </div>
      </div>
      </div>
      <div className='outer-container'> 
      <div className="containe">
      <div className="best">4</div>
        <div className="left">
          <img src={myImage} alt="image" />
          <p className="builder-title">CDK</p>
        </div>
        <div className="mid-content">
          <p className="text">
            <b> CDK Resposive Builder: </b>
            <span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </span>
          </p>
          <h11 className='off'>26% Off</h11>

          <p className="main-highlight-title">
            <b>Main highlights</b>
            <br></br>
          </p>
          <div className="main-highlight-text-text">
            <div className='lines'>
              <p className='num'>9.9</p>
              <h3 className='h3'>Building Responsive</h3>
            </div>
            <div className='lines'>
              <p className='num'>8.9</p>
              <h3 className='h3'>Cool</h3>
            </div>
            <div className='lines'>
              <p className='num'>8.9</p>
              <h3 className='h3'>Docs</h3>
            </div>
            
          </div>
          <p className="main-highlight-titles">
            <p>Why we love it</p>
            <br></br>
          </p>
          <div className="main-highlight-text-texts">
            <div className='liness'>
              <p className='nums'><CiCircleCheck/></p>
              <h8 className='h4'>Documentation</h8>
            </div>
            <div className='liness'>
              <p className='nums'><CiCircleCheck/></p>
              <h8 className='h4'>Easy Use</h8>
            </div>
            <div className='liness'>
              <p className='nums'><CiCircleCheck/></p>
              <h8 className='h4'>Out Of Box</h8>
            </div>
          </div>
          <p className="show-more">show more</p>
        </div>
        <div className="right">
          <div className="rating-container">
            <p className="rating">9.1</p>
            <div className="other-rating-comp">
              <p className="comment">Very Good</p>
              <p className="stars">⭐⭐⭐⭐✰</p>
            </div>
          </div>
          <button className="ctag">View</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './related.scss';
import myImage from "./assets/images.jpg";


const Related = () => {
  return (
    <>
    <div className='rel'>
      <h1>Related deals you might like for</h1>
    </div>
    <div className='part'>
        <div className='boxx1'>
            <img src={myImage} alt="Description of the image" />
            <div className= 'p'>
                <p>20% Off</p>
                <p>Limited time</p>
            </div>
            <li style={{margin:'5px' }}>Webbuilder 1</li>
            <h10 style={{margin:'5px' }}>Computer Modern classic with wix support</h10>
            <ul style={{margin:'5px' }}>
                <li>$39.96</li>
                <li>$49.96</li>
                <li>(20%)</li>
            </ul>
            <button>View Deal</button>
        </div>
        <div className='boxx2'>
        <img src={myImage} alt="Description of the image" />
            <div className= 'p'>
                <p>20% Off</p>
                <p>Limited time</p>
            </div>
            <li style={{margin:'5px' }}>Webbuilder 1</li>
            <h10 style={{margin:'5px' }}>Computer Modern classic with wix support</h10>
            <ul style={{margin:'5px' }}>
                <li>$39.96</li>
                <li>$49.96</li>
                <li>(20%)</li>
            </ul>
            <button>View Deal</button>
        </div>    
        <div className='boxx3'>
        <img src={myImage} alt="Description of the image" />

        <div className= 'p'>
                <p>20% Off</p>
                <p>Limited time</p>
            </div>
            <li style={{margin:'5px' }}>Webbuilder 1</li>
            <h10 style={{margin:'5px' }}>Computer Modern classic with wix support</h10>
            <ul style={{margin:'5px' }}>
                <li>$39.96</li>
                <li>$49.96</li>
                <li>(20%)</li>
            </ul>
            <button>View Deal</button>
        </div>
    </div>
    <div className='parts'>
        <div className='sign'>Sign up and get exclusive <br/>special deals</div>
        <div class="nav-search">
                <input class="search-input"/>
                <div class="search-icon">
                    <button>Sign In</button>
                </div>
            </div>
    </div>
    </>
  )
}

export default Related

import React from 'react'
import './HeroComponent.css'
function HeroComponent({ ProjectH1, ProjectP1, backgroundImage,backHeight,backsize }) {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
        height: backHeight,
        fontSize: backsize,
      };
  return (
    <div className='HeroComponent1' style={style}> 
        <div className="HeroComponent11">
            <h1>{ProjectH1}</h1>
            <p>Home ~ <span>{ProjectP1}</span></p>
        </div>
    </div>
  )
}

export default HeroComponent
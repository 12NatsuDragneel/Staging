import React from 'react'
import './About.css'
import HeroComponent from '../HeroComponent/HeroComponent'
import Choose from '../Choose/Choose'
import Meet from '../Meet/Meet'
function About() {
  return (
    <div>
        <HeroComponent 
        ProjectH1={"ABOUT US"}
        ProjectP1={"About Us"}
        backgroundImage={"./Images/breadcrumb-bg.jpeg"}
        />
        <div className="About1">
            <div className="About11"><sup>WHO ARE WE</sup>
            <h1>ABOUT US</h1><p>As you might expect of a company that began as a high-end interiors contractor.</p>
            </div>
            <div className="About12">
                <p>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed. Anisotropic elements that randomly sample. Quisque sit amet nisl ante.</p>
                <div className="About121">
                <div className="About122"><img src="./Images/services-5.png" alt="" /><h2>OUR MISSION</h2><p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention. Anisotropic elements that randomly sample.</p></div>
                <div className="About122"><img src="./Images/services-6.png" alt="" /><h2>OUR VISION</h2><p>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction. Anisotropic elements that randomly sample.</p></div>
                </div>
            </div>
        </div>
        <Choose />
        <Meet />
    </div>
  )
}

export default About
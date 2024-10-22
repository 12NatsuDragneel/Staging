import React from 'react'
import './Services.css'
import HeroComponent from '../HeroComponent/HeroComponent'
import Special from '../Special/Special'

function Services() {
  return (
    <div>
      <HeroComponent 
        ProjectH1="Our Services"
        ProjectP1="Our Services"
        backgroundImage="../../../public/Images/breadcrumb-bg.jpeg"
      />
      <div className="Services1">
        <div className="special">
          <div className="Special1">
            <sup>OUR SPECIALIZATION</sup>
            <h1>WHAT WE DO</h1>
          </div>
          <div className="Special2">
            <div className="Special21 Special22">
              <img src="../../../public/Images/services-1.png" alt="Interior Design" />
              <h2>INTERIOR DESIGN</h2>
              <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
              <ul>
                <li>- Energy allocation.</li>
                <li>- Fire protection, safety</li>
                <li>- Lifts and escalators.</li>
                <li>- Facade engineering.</li>
              </ul>
            </div>
            <div className="Special21">
              <img src="../../../public/Images/services-2.png" alt="Office Design" />
              <h2>OFFICE DESIGN</h2>
              <p>Our commitment to exceptional quality has never wavered. Today ranks as one of the most highly-regarded construction.</p>
              <ul>
                <li>- Active system.</li>
                <li>- Air conditioning.</li>
                <li>- BSRIA blue book.</li>
                <li>- Building services engineer.</li>
              </ul>
            </div>
            <div className="Special21">
              <img src="../../../public/Images/services-3.png" alt="Home Design" />
              <h2>HOME DESIGN</h2>
              <p>Interdisciplinary architectural studio with cultural, residential, and commercial projects built worldwide.</p>
              <ul>
                <li>- Pipework.</li>
                <li>- Plant room.</li>
                <li>- Plumbing.</li>
                <li>- Rules of Thumb</li>
              </ul>
            </div>
            <div className="Special21">
              <img src="../../../public/Images/services-4.png" alt="Design Drawing" />
              <h2>DESIGN DRAWING</h2>
              <p>Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>
              <ul>
                <li>- Guidelines for building.</li>
                <li>- Thermal comfort.</li>
                <li>- Types of building services.</li>
                <li>- Types of heating system.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="body1">
        <div className="stats-section">
          <div className="stat">
            <h1>85</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div className="stat">
            <h1>127</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <div className="stat">
            <h1>36</h1>
            <p>AWARDS RECEIVED</p>
          </div>
          <div className="stat">
            <h1>74</h1>
            <p>CUPS OF COFFEE</p>
          </div>
        </div>
      </div>
      <div className="body2">
        <div className="clients-section">
          <div className="clients-header">
            <h2>BRANDING</h2>
            <h1>OUR CLIENTS</h1>
          </div>
          <div className="clients-logos">
            
          <a href="#"><img src="../../../public/Images/logo-1.png" alt="Stackture" /></a>
          <a href="#"><img src="../../../public/Images/logo-2.png" alt="Craftgenic" /></a>
          <a href="#"><img src="../../../public/Images/logo-3.png" alt="DesignRipple" /></a>
          <a href="#"><img src="../../../public/Images/logo-4.png" alt="Neural Construct" /></a>
          <a href="#"><img src="../../../public/Images/logo-3.png" alt="DesignRipple" /></a>
            <a href="#"><img src="../../../public/Images/logo-5.png" alt="Rebel Architect" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

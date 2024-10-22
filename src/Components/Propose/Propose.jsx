import React from 'react'
import './Propose.css'
import aboutPic from './Images/about-pic.jpeg'
function Propose() {
    return (
        <div>
            <div className="Propose1">
                <div className="Propose11"><sup>WHO ARE WE</sup>
                    <h1>WE PROPOSE AND DISCUSS DESIGN RULES</h1>
                    <p>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.</p>
                    <p>Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
                    </p>
                    <a href="#">Learn More</a>
                </div>
                <div className="Propose12"><img src={aboutPic} alt="" /></div>
            </div>
        </div>
    )
}

export default Propose
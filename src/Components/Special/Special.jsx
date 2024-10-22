import React from 'react'
import './Special.css'
function Special() {
  return (
    <div className='special'>
        <div className="Special1">
            <sup>OUR SPECIALIZATION</sup>
            <h1>WHAT WE DO</h1>
        </div>
        <div className="Special2">
            <div className="Special21 Special22">
                <img src="../../../public/Images/services-1.png" alt="" />
                <h2>INTERIOR DESIGN</h2>
                <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
            </div>
            <div className="Special21">
                <img src="../../../public/Images/services-2.png" alt="" />
                <h2>OFFICE DESIGN</h2>
                <p>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.</p>
            </div>
            <div className="Special21">
                <img src="../../../public/Images/services-3.png" alt="" />
                <h2>HOME DESIGN</h2>
                <p>Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.</p>
            </div>
            <div className="Special21">
                <img src="../../../public/Images/services-4.png" alt="" />
                <h2>DESIGN DRAWING</h2>
                <p>Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>
            </div>
        </div>
    </div>
  )
}

export default Special
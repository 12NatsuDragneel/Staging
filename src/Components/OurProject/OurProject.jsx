import React from 'react'
import HeroComponent from '../HeroComponent/HeroComponent'
import OfficeBuilding from '../OfficeBuilding/OfficeBuilding'

function OurProject() {
  return (
    <div>
        <HeroComponent 
        ProjectH1={"OUR PROJECTS"}
        ProjectP1={"Projects"}
        backgroundImage={"./Images/breadcrumb-bg.jpeg"}
        />
        <OfficeBuilding />
        
    </div>
  )
}

export default OurProject
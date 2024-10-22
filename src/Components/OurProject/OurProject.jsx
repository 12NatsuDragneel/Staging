import React from 'react'
import HeroComponent from '../HeroComponent/HeroComponent'
import OfficeBuilding from '../OfficeBuilding/OfficeBuilding'

function OurProject() {
  return (
    <div>
        <HeroComponent 
        ProjectH1={"OUR PROJECTS"}
        ProjectP1={"Projects"}
        backgroundImage={"../../../public/Images/breadcrumb-bg.jpeg"}
        />
        <OfficeBwuilding />
        
    </div>
  )
}

export default OurProject
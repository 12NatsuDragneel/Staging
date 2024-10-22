import React from 'react'
import './Latest.css'
import View from '../View'
function Latest() {
  return (
    <div>
        <View 
        takeH1={"FROM OUR BLOG"}
        takeSup={"LATEST NEWS"}
        />
        <div className="View1">
            <div className="View11 View12"> <img src="../../../public/Images/latest-1.jpeg" alt="" /><sup>ARCHITECTURE</sup><p>Target and Amazon Shopping List for Home Stagers</p><a href="#Hero">Read more</a></div>
            <div className="View11 View13"><img src="../../../public/Images/latest-2.jpeg" alt="" /><sup>INTERIOR</sup><p>6 Ideas for Team Building and Employee Appreciation for Home Stagers</p><a href="#Hero">Read more</a></div>
            <div className="View11 View14"><img src="../../../public/Images/latest-3.jpeg" alt="" /><sup>PLANNING</sup><p>How to Find the Best Price Structure for Your Home Staging Services</p><a href="#Hero">Read more</a></div>
        </div>
    </div>
  )
}

export default Latest
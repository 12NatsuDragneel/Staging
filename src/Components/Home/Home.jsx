import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import Propose from '../Propose/Propose'
import Works from '../Works/Works'
import Special from '../Special/Special'
import Happy from '../Happy/Happy'
import Testimonial from '../Testimonial/Testimonial'
import Meet from '../Meet/Meet'
import Choose from '../Choose/Choose'
import Latest from '../Latest/Latest'
function Home() {
  return (
    <div>
      <Hero />
      <Propose />
      <Works />
      <Special />
      <Happy />
      <Testimonial />
      <Meet />
      <Choose />
      <Latest />
    </div>
  )
}

export default Home
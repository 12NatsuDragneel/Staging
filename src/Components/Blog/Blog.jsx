import React from 'react'
import './Blog.css'
import HeroComponent from '../HeroComponent/HeroComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Blog() {
  return (
    <div>
      <div className="B1">
      <HeroComponent 
      ProjectH1={"Our Blogs"}
      ProjectP1={"Blogs"}
      backgroundImage={'../../../public/Images/breadcrumb-bg.jpeg'}
      /></div>
      <div className="main">
        <div className="sub1">
          <div className="sub11">
            <sup>December 20, 2019
            <li> By John Doe</li>
            <li> Planning</li>
            </sup>
              <h1>Target and Amazon Shopping List for Home Stagers</h1>
              <img src="../../../public/Images/blog-1.jpeg" alt="get shit done" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <a href="#">Read more</a>
            </div>
            <div className="sub111"><p>“Without question this is the stager you want to use! Jennifer staged a hard to sell home for me and we sold it fast! …. Jennifer made it possible.”
          </p>
          <h2>Martin Lockhart</h2>
</div>
<div className="sub11 sub112">
            <sup>December 20, 2019
            <li> By John Doe</li>
            <li> Planning</li>
            </sup>
              <h1>6 Ideas for Team Building & Employee Appreciation for Home Stagers</h1>
              <img src="../../../public/Images/blog-2.jpeg" alt="get shit done" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <a href="#">Read more</a>
            </div>
            <div className="sub11 sub112 sub1121">
            <sup>December 20, 2019
            <li> By John Doe</li>
            <li> Planning</li>
            </sup>
              <h1>How to Find the Best Price Structure for Your Home Staging Services</h1>
              <img src="../../../public/Images/blog-2.jpeg" alt="get shit done" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <a href="#">Read more</a>
            </div>
            <div className="sub113">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#"><FontAwesomeIcon icon={faAnglesRight} /></a>
            </div>
        </div>
        <div className="sub2">
          <div className="sub21"><img src="../../../public/Images/blog-about.png" alt="" id='sub21Img' />
          <p>Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel facilisis.

</p>
<img src="../../../public/Images/signature.png" alt="" />
<div className="search-container" style={{ position: 'relative' }}>
            <input 
                type="text" 
                placeholder="Search..." 
                
            />
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                style={{
                    position: 'absolute',
                    right: '22%', 
                    top: '20%',
                    transform: 'translateY(-50%)',
                    color: '#ccc',
                    pointerEvents: 'none',
                    transform: 'rotate(80deg)'
                }} 
            />
        </div>
          </div>
          <div className="sub22">
            <h3>Categories</h3>
            <ul><li>Work Space</li>
            <li>Office Building</li>
            <li>HomeStay</li>
            <li>Making</li>
            <li>Process</li>
            </ul>
          </div>
          <div className="sub23">
            <h2>Feature News</h2>
            <div className="sub231">
              <img src="../../../public/Images/br-1.jpeg" alt="" />
              <div className="sub2311">
              <h4>December 20, 2019</h4>
              <p>Grace Millane's mother tells killer she died 'terrified </p>
              </div>
            </div>
            <div className="sub231">
              <img src="../../../public/Images/br-2.jpeg" alt="" />
              <div className="sub2311">
              <h4>December 20, 2019</h4>
              <p>A 'gregarious' gap-year student who dreamed </p>
              </div>
            </div>
            <div className="sub231">
              <img src="../../../public/Images/br-3.jpeg" alt="" />
              <div className="sub2311">
              <h4>December 20, 2019</h4>
              <p>A 'gregarious' gap-year student who dreamed </p>
              </div>
            </div>
          </div>
          <div className="sub24">
            <h3>Tag</h3>
            
            <ul>
              <a href="#"><li id='sub24li'>BRADNING</li></a>
              <a href="#"><li>OFFICE</li></a>
              <a href="#"><li>CREATIVE</li></a>
              <a href="#"><li>BUILDING</li></a>
              <a href="#"><li>PORTFOLIO</li></a>
              <a href="#"><li>PRODUCTS</li></a>
              <a href="#"><li>WEBSITE</li></a>
              <a href="#"><li>DESIGN</li></a>
              <a href="#"><li>WORKING SPACE</li></a>
            </ul>
          </div>
          <div className="sub25">
            <h3>Follow Us</h3>
            <ul>
              <li id='sub25li'><a href="#"> <FontAwesomeIcon icon={faFacebookF}  /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li id='sub25li1'><a href="#"><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#707070",}} /></a></li>
            </ul>
          </div>
          <div className="sub26">
            <h3>Newslatter</h3>
            <div className="input-container1">
            <input type="text" placeholder='Your email address' />
            <button class="input-button" ><FontAwesomeIcon icon={faLocationArrow} style={{color: "black",}} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
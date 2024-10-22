import React from 'react';
import './Meet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import View from '../View';

function Meet() {
  return (
    <div className='Meet0'>
      <View 
      takeSup={"OUR TEAM"}
      takeH1={"MEET OUR TEAM"}
      />
      <div className="Meet2">
        <div className="Meet21">
          <div className="Meet211">
            <h2>Dolores Webster</h2>
            <sub>CEO & Founder</sub>
          </div>
          <div className="Meet212">
            <h2>Dolores Webster</h2>
            <sub>CEO & Founder</sub>
            <p>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
              consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
              eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
            </p>
            <div className="social-icons">
              <i>
              <a href="#Hero">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </i>
            </div>
          </div>
        </div>
        <div className="Meet21 Meet22">
          <div className="Meet211">
            <h2>Dana Vaughn</h2>
            <sub>Architect</sub>
          </div>
          <div className="Meet212">
            <h2>Dana Vaughn</h2>
            <sub>Architect</sub>
            <p>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
              consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
              eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
            </p>
            <i>
              <a href="#Hero">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </i>
          </div>
        </div>
        <div className="Meet21 Meet23">
          <div className="Meet211">
            <h2>Jonathan Mcdaniel</h2>
            <sub>Architect</sub>
          </div>
          <div className="Meet212">
            <h2>Jonathan Mcdaniel</h2>
            <sub>Architect</sub>
            <p>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
              consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
              eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
            </p>
            <i>
              <a href="#Hero">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#Hero">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;

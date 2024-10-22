import React from 'react';
import HeroComponent from '../HeroComponent/HeroComponent';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div>
      <HeroComponent 
        backgroundImage={'../../../public/Images/little-header.jpeg'}
        backHeight={'19vh'}
        backsize={0}
      />
      <section className={styles.contact + " " + styles.spad}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colLg5}>
              <div className={styles.contact__text}>
                <div className={styles.sectionTitle}>
                  <span>Information</span>
                  <h2>Contact Details</h2>
                </div>
                <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.colLg4} ${styles.colMd6} ${styles.colSm6}`}>
              <div className={styles.contact__widget__item}>
                <div className={styles.contact__widget__item__icon}>
                  <img src="../../../public/Images/ci-1.png" alt="" />
                </div>
                <div className={styles.contact__widget__item__text}>
                  <h5>Phone Number</h5>
                  <span>+01 123 456 789</span>
                </div>
              </div>
            </div>
            <div className={`${styles.colLg4} ${styles.colMd6} ${styles.colSm6}`}>
              <div className={styles.contact__widget__item}>
                <div className={styles.contact__widget__item__icon}>
                  <img src="../../../public/Images/ci-2.png" alt="" />
                </div>
                <div className={styles.contact__widget__item__text}>
                  <h5>Email Address</h5>
                  <span>info.colorlib@gmail.com</span>
                </div>
              </div>
            </div>
            <div className={`${styles.colLg4} ${styles.colMd6} ${styles.colSm6}`}>
              <div className={`${styles.contact__widget__item} ${styles.last__item}`}>
                <div className={styles.contact__widget__item__icon}>
                  <img src="../../../public/Images/ci-3.png" alt="" />
                </div>
                <div className={styles.contact__widget__item__text}>
                  <h5>Office Location</h5>
                  <span>7176 Blue Spring Lane, NY, US</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd" 
              height="460" 
              style={{border:0}} 
              allowFullScreen
            >
            </iframe>
          </div>
          <div className={styles.row}>
            <div className={styles.colLg5}>
              <div className={styles.contact__form__text}>
                <div className={styles.sectionTitle}>
                  <span>Form</span>
                  <h2>Get in touch</h2>
                </div>
                <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.colLg8}>
              <div className={styles.contact__form}>
                <form action="#">
                  <div className={styles.row}>
                    <div className={`${styles.colLg6} ${styles.colMd6} ${styles.colSm6}`}>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className={`${styles.colLg6} ${styles.colMd6} ${styles.colSm6}`}>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className={styles.colLg12}>
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" className={styles.siteBtn}>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import React from "react";
import './styles.css';

//icons
import phonIcon from 'src/assets/icons/phone-fill.png';
import mailIcon from 'src/assets/icons/mail-fill.png';
import Line4 from 'src/assets/icons/Line4.png'

export default function FooterBox() {

  return (
    <div className="container">
      
      <div className="footer-box">
        <div className="footer-box__group">
          <div className="footer-box__icon">
            <img src={mailIcon} alt="mailIcon" />
          </div>
          <span className="footer-box__text">Info@youremail.com</span>
        </div>

        <div className="footer-box__group2">
          <img className="footer-box__line" src={Line4} alt="Line4" />


          <div className="footer-box__group">
            <div className="footer-box__icon">
              <img src={phonIcon} alt="phonIcon" />
            </div>
            <span className="footer-box__text">(480) 555-0103</span>
          </div>
        </div>

      </div>

      <div className="margin_button">
      </div>
    </div>

  )
}

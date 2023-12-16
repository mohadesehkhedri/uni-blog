import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';

//pictures
import mobile from "src/assets/pictures/Mobile.png";

//icons
import googlePlayIcon from 'src/assets/icons/googlePlayIcon.png';
import appStoreIcon from 'src/assets/icons/appStoreIcon.png';


export default function HeroSaction() {

  return (

    <div className="container-imag">
      <div className="container">

        <Zoom right >
          <div className="cards-align">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-inner">
                  <span className="card__title">
                    A Great App Makes Your Life Better
                  </span>
                  <div className="card__text">
                    <span>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                  </div>
                  <span className="card__title2">Download App Now</span>
                  <div calssclassName="card__icon">
                    <img src={googlePlayIcon} alt="googlePlayIcon" />
                    <img src={appStoreIcon} alt="appStoreIcon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card-mobile">
                <img src={mobile} alt="mobile" />
              </div>
            </div>

          </div>

        </Zoom>

      </div>
    </div>
  )

}
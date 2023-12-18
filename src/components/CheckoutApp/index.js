import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';
import Carousel from "src/components/CheckoutApp/Carousel";

//pictures
import AppDesgin from "src/assets/pictures/AppDesgin.png";

//icons
import Slider from "src/assets/icons/Slider.png";
import googlePlayIcon from 'src/assets/icons/googlePlayIcon.png';
import appStoreIcon from 'src/assets/icons/appStoreIcon.png';
import starIcon from "src/assets/icons/starIcon.png";
import likeIcon from "src/assets/icons/likeIcon.png";
import downloadIcon from "src/assets/icons/downloadIcon.png";


export default function CheckoutApp() {

  return (

    <div className="container">

      <Zoom right>
        <div className="description">
          <span className="description__title">
            Checkout Our App Interface Look
          </span>
          <div className="description__text">
            <span className="description__color">
              Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </span>
          </div>
        </div>
      </Zoom>

      <Zoom right>
        <div className="slider">
          <div className="slider__align">
            <Carousel />
          </div>
        </div>
      </Zoom>

      <Zoom right>
        <div className="slider__icon">
          <img src={Slider} alt="Slider" />
        </div>

        <div className="checkout-app-align">

          <div className="checkout-wrapper">
            <div className="download-app-items">
              <div className="description--left">
                <span class="description__title">
                  Download App Now
                </span>

                <div class="description__text--left">
                  <span class="description__color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                  </span>
                </div>
              </div>

              <div className="about">
                <div>
                  <img className="about__icon" src={googlePlayIcon} alt="googlePlayIcon" />
                  <img src={appStoreIcon} alt="appStoreIcon" />
                </div>

                <div className="about__space">
                  <div className="about__box">
                    <img className="about__icons" src={downloadIcon} alt="downloadIcon" />
                    <div className="about__text">
                      <span>59865</span>
                      <span className="about__text2">Download</span>
                    </div>
                  </div>
                  <div className="about__box about__box--align">
                    <img className="about__icons" src={likeIcon} alt="likeIcon" />
                    <div className="about__text">
                      <span>29852</span>
                      <span className="about__text2">Like</span>
                    </div>
                  </div>
                  <div className="about__box">
                    <img className="about__icons" src={starIcon} alt="starIcon" />
                    <div className="about__text">
                      <span>1500</span>
                      <span className="about__text2">5 star rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-wrapper checkout-wrapper--phone">
            <div class="app-design">
              <img src={AppDesgin} alt="AppDesgin" />
            </div>
          </div>


        </div>
      </Zoom>

    </div>

  )
}
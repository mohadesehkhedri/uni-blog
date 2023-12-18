import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';

//pictures
import profileImag from "src/assets/pictures/profileImage2.png";


export default function HeroSactions() {

  return (

    <div className="container-imag">
      <div class="container">

        <Zoom right >
          <>
            <div class="description">
              <span class="description__title">
                Our Happy Customers
              </span>

              <div class="description__text">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </span>
              </div>
            </div>
          </>

          <div className="sliders">
            <div className="sliders__box">
              <img src={profileImag} alt="profileImage2" />
              <span class="slider__customer-name">Ann Lubin</span> <br />
              <span class="slider__customer-job">Co-Founder</span> <br />
              <span class="slider__customer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.            </span>
            </div>
          </div>
        </Zoom>
      </div>
    </div>


  )

}
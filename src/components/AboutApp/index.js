import React from "react";
import './styles.css';

//pic
import smartphone from "src/assets/pictures/smartphone.png";

//icon
import checkboxIcon from "src/assets/icons/checkboxIcon.png";


export default function AboutApp() {

  return (

    <div className="container">

      <div className="description">
        <span class="description__title">
          About Our App
        </span>
        <div class="description__text">
          <span class="description__color">
            Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </span>
        </div>
      </div>

      <div className="about-app-align">

        <div className="about-app-wrapper">
          <div className="smartphone">
            <img src={smartphone} alt="smartphone" />
          </div>
        </div>

        <div className="about-app-wrapper about-app-wrapper--shadow-box">
          <div className="shadow-box-align">
            <div className="shadow-box">
              {Array(3).fill('').map(() => {
                return (
                  <div className="shadow-box__box">
                    <div className="shadow-box__space">
                      <div>
                        <img src={checkboxIcon} alt="checkboxIcon" />
                      </div>
                      <div>
                        <div className="shadow-box__title">
                          <span>Creative design</span>
                        </div>
                        <div className="shadow-box__text">
                          <span >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
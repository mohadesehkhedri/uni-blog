import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';

//pictures
import image from "src/assets/pictures/Image.png";

export default function AppUse() {

  return (
    <div className="container-image container-imag--use">
      <div className="container">

        <Zoom right>
          <div className="description">
            <span className="description__title description__title--margin-top">
              how to use the app perfectly
            </span>
            <div className="description__text">
              <span>
                Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </span>
            </div>
          </div>
        </Zoom>
      </div>

      <Zoom right>
        <div className="picture" >
          <img src={image} alt="imag" />
        </div>
      </Zoom>
      
    </div>
  )
}
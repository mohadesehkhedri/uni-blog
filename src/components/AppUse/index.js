import React from "react";
import './styles.css';

//pictures
import image from "src/assets/pictures/Image.png";

export default function AppUse() {

  return (
    <div className="container-image container-imag--use">
      <div className="container">

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
      </div>

      <div className="picture" >
        <img src={image} alt="imag" />
      </div>

    </div>
  )
}
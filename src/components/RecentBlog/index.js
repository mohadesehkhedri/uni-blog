import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';

//pictures
import Image2 from "src/assets/pictures/Image2.png";

export default function RecentBlog() {

  return (

    <div className="container">

      <Zoom right>
        <>
          <div class="description">
            <span class="description__title">
              Our recent blog
            </span>

            <div class="description__text">
              <span class="description__color">
                Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </span>
            </div>
          </div>

          <div class="blog-card-align">
            {Array(3).fill('').map(() => {
              return (
                <div class="blog-card__box">
                  <div class="blog-card__image">
                    <img src={Image2} alt="Image2" />
                  </div>

                  <span class="blog-card__title">
                    Global Partner Solutions: A Partnership of Innovation
                  </span>
                  <span class="blog-card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                  </span>

                  <div class="blog-card__link">
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      </Zoom>

    </div>
  )

}
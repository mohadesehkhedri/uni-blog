import React from "react";
import './styles.css';

//pictures
import profileImag from "src/assets/pictures/profileImage.png";
import border from "src/assets/pictures/border.png";

//icons
import youtube from "src/assets/icons/youtube.png";
import instagram from 'src/assets/icons/instagram.png';
import twitter from 'src/assets/icons/twitter.png';
import facebook from 'src/assets/icons/facebook.png';
import Line from 'src/assets/icons/Line.png';

export default function AppTeam() {

  return (
    
      <div className="container">

          <div class="description description--team">
            <span class="description__title">
              Our reative team
            </span>

            <div class="description__text">
              <span class="description__color">
                Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </span>
            </div>
          </div>

          <div class="team-card-align">
            {Array(3).fill('').map(() => {
              return (
                <div class="team-card team-card--job">
                  <div class="team-card__avatar">
                    <img src={profileImag} alt="profile" />
                  </div>

                  <div class="team-card__avatar-border">
                    <img src={border} alt="border" />
                  </div>

                  <span class="team-card__name team-card__name--person" >Craig Gouse</span>
                  <span class="team-card__name team-card__name--job">UI/UX Designer</span>
                  <span class="team-card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                  </span>

                  <div class="team-card__icon">
                    <img src={facebook} alt="facebook" />
                    <img src={Line} alt="Line" />
                    <img src={instagram} alt="instagram" />
                    <img src={Line} alt="Line" />
                    <img src={twitter} alt="twitter" />
                    <img src={Line} alt="Line" />
                    <img src={youtube} alt="facebook" />
                  </div>
                </div>
              )
            })}
          </div>
      </div>
  

  )

}
import React from "react";
import './styles.css';

//icons
import youtube from "src/assets/icons/youtubeIcon.png";
import instagram from 'src/assets/icons/instagramIcon.png';
import twitter from 'src/assets/icons/twitterIcon.png';
import facebook from 'src/assets/icons/facebookBlue.png';
import Line from 'src/assets/icons/Line2.png';
import sendIcon from 'src/assets/icons/sendIcon.png';
import Line3 from 'src/assets/icons/Line3.png';
import Group from 'src/assets/icons/Group.png';


export default function Footer() {

  return (
    <div className="background-color">
      <div className="container container__align">

        <div className="footer">

          <div className="footer__description1">
            <span className="footer__title footer__title--logo">
              Logo
            </span>
            <div className="footer__text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </span>
            </div>

            <div className="team-card__icon">
              <div><img src={facebook} alt="facebook" /></div>
              <div><img src={Line} alt="Line" /></div>
              <div><img src={instagram} alt="instagram" /></div>
              <div><img src={Line} alt="Line" /></div>
              <div><img src={twitter} alt="twitter" /></div>
              <div><img src={Line} alt="Line" /></div>
              <div><img src={youtube} alt="facebook" /></div>
            </div>
          </div>

          <div className="footer__description2">
            <span className="footer__title">
              quick link
            </span>
            <div class="footer__text footer__text--link">
              <span>About</span>
              <span className="text-link">Features</span>
              <span className="text-link">Screenshot</span>
              <span className="text-link">Blog</span>
            </div>
          </div>


          <div className="footer__description3">
            <span className="footer__title">
              news letter
            </span>
            <br />
            <div className="footer__text">
              <span>
                Subscribe our newsletter to get our latest <br />
                update & news
              </span>
            </div>

            <div className="footer__input">
              <span>Your email address</span>
              <div className="send-icon">
                <img src={sendIcon} alt="sendIcon" />
              </div>
            </div>
          </div>
        </div>

        <img src={Line3} alt="Line3" />

        <div className="footer__line">
          <img className="footer-line-icon" src={Group} alt="Group" />
          <span className="line__text">Copyright 2021 .Ojjomedia. All Right Reserved.</span>
        </div>

      </div>
    </div>

  )

}
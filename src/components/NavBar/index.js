import { NavLink } from 'react-router-dom';

//icons
import youtubeIcon from "src/assets/icons/youtubeIcon.png";
import instagramIcon from 'src/assets/icons/instagramIcon.png';
import twitterIcon from 'src/assets/icons/twitterIcon.png';
import facebookIcon from 'src/assets/icons/facebookIcon.png';
import phonIcon from 'src/assets/icons/phoneIcon.png';
import mailIcon from 'src/assets/icons/mailLIcon.png';
import appollyIcon from 'src/assets/icons/appollyIcon.png';

const NavBar = () => {
   return (
      <>
         <div className="top-menu">
            <div className="top-menu__left">
               <div className="top-menu__item">
                  <img className="icon-size" src={mailIcon} alt="mailIcon" />
                  <span>Info@youremail.com</span>
               </div>

               <div className="top-menu__item">
                  <img className="icon-size" src={phonIcon} alt="phonIcon" />
                  <span>(480) 555-0103</span>
               </div>
            </div>

            <div className="top-menu__right">
               <img className="icon-size" src={facebookIcon} alt="facebookIcon" />
               <img className="icon-size" src={instagramIcon} alt="instagramIcon" />
               <img className="icon-size" src={twitterIcon} alt="twitterIcon" />
               <img className="icon-size" src={youtubeIcon} alt="youtubeIcon" />
            </div>
         </div>

         <div className="menu">

            <div className="menu__left">
               <NavLink style={{ textDecoration: "none" }} to="/">     
               <span className="menu__fontsize">Home</span>
               </NavLink>

               <span className="menu__fontsize">About</span>
               <span className="menu__fontsize">Features</span>
            </div>

            <div className="menu__logo"><img src={appollyIcon} alt="appollyIcon" /></div>

            <div className="menu-right-align">
               <div className="menu__right">
                  <span className="menu__fontsize">Screenshot</span>

                  <NavLink style={{ textDecoration: "none" }} to="/Blog">
                     <span className="menu__fontsize">Blog</span>
                  </NavLink>
               </div>

               <div className="menu-align-button">
                  <button className="menu__button">Download</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default NavBar;
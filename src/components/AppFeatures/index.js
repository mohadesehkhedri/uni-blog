import React from "react";
import './styles.css';
import Zoom from 'react-reveal/Zoom';

//pictures
import app from "src/assets/pictures/App.png";

//icons
import commentIcon from "src/assets/icons/commentIcon.png";
import browser from "src/assets/icons/browser.png";
import penIcon from "src/assets/icons/penIcon.png";
import cellphone from "src/assets/icons/cellphone.png";
import eyescanner from "src/assets/icons/eyescanner .png";
import maletemarketer from "src/assets/icons/maletelemarketer.png";


export default function AppFeatures() {

  return (
    <div className="container-imag">
      <div className="container">

        <Zoom right>
          <div className="description">
            <span className="description__title">
              App features
            </span>

            <div class="description__text">
              <span>
                Lorem ipsum dolor sit consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </span>
            </div>
          </div>
        </Zoom>

        <Zoom right>
          <div className="chat">
            <div className="chat__space">
              <div>
                <img src={commentIcon} alt="commentIcon" />
              </div>
              <span className="chat__title">
                Full free chat
              </span>
            </div>
            <div className="chat__text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>

        </Zoom>

        <Zoom right>

          <div className="around">
            <div className="around__space">
              <div className="flex-top around--right">
                <div><img src={browser} alt="browser" /></div>
                <span className="around__title">unlimiter features</span>
                <span className="around__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>

              <div className="flex-bottun around--right">
                <div><img src={penIcon} alt="penIcon" /></div>
                <span className="around__title">awsome ui design</span>
                <span className="around__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>

            <div className="around__pic">
              <img src={app} alt="app" />
            </div>

            <div className="around__space">
              <div className="flex-top1 around--left">
                <div><img src={cellphone} alt="cellphone" /></div>
                <span className="around__title">iso & androind version</span>
                <span className="around__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>

              <div className="flex-bottun around--left">
                <div className="scanner"><img src={eyescanner} alt="eyescanner" /></div>
                <span className="around__title">retina ready greaphics</span>
                <span className="around__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
          </div>

          <div className="flex-center around--center">
            <div><img src={maletemarketer} alt="maletemarketer" /></div>
            <span className="around__title">24/7 support by real pepole</span>
            <span className="around__text--center">
              Lorem ipsum dolor sit amet, consectetur <br />br adipiscing elit.
            </span>
          </div>
        </Zoom>

      </div>

    </div>

  )
}
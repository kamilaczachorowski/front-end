/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const TwitterIcon = generateShareIcon('twitter');

export default class ShareButton extends React.Component {
  showMailIcon() {
    const logo = require('../../../../../public/img/mail.png')
    return (
      <a 
        href="mailto:?subject=Mapping English grammar around the world.&body=I helped GamesWithWords.org train their algorithm to guess which English I speak (http://www.gameswithwords.org/WhichEnglish/). It guessed that I speak Singaporean and that my native language is Spanish. Which English do you speak?"
        title="share by Email"
      >
        <img src={logo} style={{ height: 50, width: 50 }} alt="" />
      </a>
    );
  }
  render() {
    const shareUrl = 'http://localhost/WhichEnglish';
    const title = 'WhichEnglish'
    return (
      <div style={{ marginBottom: 40 }}>
        <h5>Share your results and help us map the Englishes of the world!</h5>
        <div className="row">
            <FacebookShareButton
              url={shareUrl}
              title={title}
            >
              <FacebookIcon
                size={50}
                round
              />
            </FacebookShareButton>
            <GooglePlusShareButton
              url={shareUrl}
            >
              <GooglePlusIcon
                size={50}
                round
              />
            </GooglePlusShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={title}
            >
              <TwitterIcon
                size={50}
                round
              />
            </TwitterShareButton>
            {this.showMailIcon()}
        </div>
      </div>
    );
  }
}

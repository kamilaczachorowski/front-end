/* eslint-disable max-len */

import React, { PropTypes } from 'react';

export default class Algorithm extends React.Component {
  render() {
    const logo = require('../../../../../public/img/visual.png')
    return (
      <div className="col-xs-2">
        <a href="http://www.gameswithwords.org/WhichEnglish/dialect_results.html" target="_blank">
          <img src={logo} style={{ height: 80, width: 80 }} />
        </a>
        <p>visual</p>
      </div>
    );
  }
}

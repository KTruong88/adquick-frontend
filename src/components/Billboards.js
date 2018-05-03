import React, { Component } from 'react'
import {  } from 'react-bootstrap'

class Billboards extends Component {
  render() {
    return (
      <div>
        <h1 className="billboard-title">Billboard Voting</h1>

        <ol className="billboard-list">
          <li><img src={require('../images/best.jpg')} width="60%"/></li>
          <li><img src={require('../images/lyft.webp')} width="60%"/></li>
          <li><img src={require('../images/makers-mark.jpg')} width="60%"/></li>
          <li><img src={require('../images/youlooked.jpg')} width="60%"/></li>
        </ol>
      </div>
    );
  }
}

export default Billboards;

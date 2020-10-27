import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return(
        <h1>I'm Adam, 
            <span className="web">web developer,</span>
            <span className='solve'>problem solver.</span>
        </h1>
    )
  }
}
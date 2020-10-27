import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div id='contact'>
        <ul className='contacts'>
          <li><a href='mailto:ajlanza@gmail.com' target='_top' className='email'>ajlanza@gmail.com</a></li>
          <li><a href='https://github.com/ajlanza' target='_blank' rel='noopener noreferrer' ><img src='./grayGithub32.png' alt='github logo' className='gitIcon' /></a></li>
          <li><a href='http://www.linkedin.com/in/ajlanza' target='_blank' rel='noopener noreferrer'><img src='./LI-In-Bug.png' alt='linkedIn logo' className='linkedinIcon' /></a></li>
        </ul>
      </div>
    )
  }
}
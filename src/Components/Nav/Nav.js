import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {

  container = React.createRef();

  state = {
    open: false,
  };

  handleMenuClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  
  handleCloseMenu = e => {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleCloseMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown",this.handleCloseMenu);
  }

  render(){
    
    return(
      // MOBILE CONTAINER
      <div>
          <div className="navContainer" ref={this.container}>
            <button type="button" className="button" onClick={this.handleMenuClick}>☰</button>
            {this.state.open && (
              <div className="dropdown">
                <ul>
                  <li>
                    <a href='#about' onClick={this.handleMenuClick}>About me</a>
                  </li>
                  <li>
                    <a href='#projects' onClick={this.handleMenuClick}>Projects</a>
                  </li>
                  <li>
                    <a href='#contact' onClick={this.handleMenuClick}>Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

        {/* FULL SITE CONTAINER */}
         <div className='bigScreenContainer' >
          {/* <ul>
            <li> */}
              <a href='#about' className='navLink'>About me</a>
            {/* </li>
            <li> */}
              <a href='#projects' className='navLink'>Projects</a>
            {/* </li>
            <li> */}
              <a href='#contact' className='navLink'>Contact</a>
            {/* </li>
          </ul>   */}
        </div> 
     </div>
    )
  }
}
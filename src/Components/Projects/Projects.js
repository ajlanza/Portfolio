import React, { Component } from 'react';
import data from '../../Assets/data';
import './Projects.css';

export default class Projects extends Component {
  state = {
    showDetails: null,
  }

  handleClick = (id) => {
    if (this.state.showDetails === id) 
      id = null;
    this.setState({
      showDetails: id,
    })    
  }
  render() {
    return(
      <div className='projectsContainer' id='projects'>
        <h2>Recent Projects</h2>
        {
          data.map(project => 
            <div className='project' key={project.name}>
              <a href={project.url} target='_blank' rel='noopener noreferrer'><img src={project.image.source} alt={project.image.alt} className='projectImage'/></a>
              <ul className='projectDetails'>
                <li className='projectTitle'><h3><a href={project.url} target='_blank' rel='noopener noreferrer'>{project.name}</a></h3></li>
                <li className='projectDescription hide'>{project.description}</li>
                <li className='projectDevelopedWith hide'>Developed with: {project.developedWith}</li>
                <li className='projectCode hide'><a href={project.codeURL} target='_blank' rel='noopener noreferrer'>See the code.</a></li>
                <li className='details show' onClick={() => this.handleClick(project.id)}>Details</li>
                {this.state.showDetails === project.id
                  ? <li className={`projectDescription`}>{project.description}</li>
                  : ''
                }
              </ul>
            </div>
          )
        }
      </div>
    )
  }
}
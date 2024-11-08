import React, { Component } from 'react'

import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          {portfolio.map(project => (
            <PortfolioItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title} 
              stack={project.stack} 
              link={project.link} 
              description={project.description}
              githubLink={project.githubLink}
              backendLink={project.backendLink}
            />
              
          ))}
        </div>
      </div>
    )
  }
}

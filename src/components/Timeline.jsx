import React, { Component } from 'react'
import timeline from '../data/timeline'
import TimeLineItem from './TimelineItem'
import Title from './Title'

export default class Timeline extends Component {
  render() {
    return (
      <div className='flex flex-col md:flex-row justify-center my-20'>
        <div className='w-full md:w-9/12'>
          <Title>Timeline</Title>
          {timeline.map(item => (
            <TimeLineItem
              year = {item.year}
              title = {item.title}
              duration = {item.duration}
              details = {item.details}
            />
          ))}
        </div> 
      </div>
    )
  }
}

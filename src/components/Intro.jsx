import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
        <div className='flex item-center justify-center flex-col 
        text-center pt-20 pb-6'>
        <h1 className='text-4x1 md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>Berna SIMSEK</h1>
        <p className='text-base md:text-xl mb-3 front-medium'>Front End Developer</p>
        <p className='text-sm max-w-x1 mb-6 font-bold'>
           I graduated from Kocaeli University, Information Systems Engineering.
           I want to continue my career as a front end developer, so I am
           constantly trying to improve myself. I have focused on serverless
           web technologies on AWS and learning, using different JS frameworks
           such as Vue.js. In the past, I had the opportunity to work with C#,
           Sql, Java, Python, Javascript, HTML and CSS. I value great importance
           to learning new information, I believe that I can be a harmonious teammate.


        </p>
        </div>
    )
  }
}   
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='py-5 text-center'>
        <p className='text-sm mt-2 opacity-50'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    )
  }
}

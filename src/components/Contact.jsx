import React, { Component } from 'react'
import Title from './Title'
export default class Contact extends Component {
  render() {
    return (
      <div className='flex flex-col mb-10 mx-auto mt-10 w-full'>
        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/66aca1ec-bd8c-47c6-abea-033442f74cc0'
            method='POST'
            className='flex flex-col w-full'
          >
            <Title>Contact</Title>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='p-2 bg-transparent 
              border-2 rounded-md focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Email'
              className='my-2 p-2 bg-transparent
               border-2 rounded-md focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Message' 
              rows='10'
              className='p-2 mb-text bg-transparent
              border-2 rounded-md
              focus:outline-none'
            />  
            <button
              type='submit'
              className='text-center inline-block
              px-8 py-3 my-3 w-max text-base font-medium rounded-md text-white
              bg-gradient-to-r from-yellow-500 to-pink-500
              drop-shadow-md hover:stroke-white
              '>
                Work With Me
            </button>
          </form>
        </div>
      </div>
    )
  }
}

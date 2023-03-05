import React, { Component } from 'react' 
const PortfolioItem = ({title,imgUrl,stack,link}) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='border-2 border-stone-900 dark:border-white rounded-md
        overflow-hidden'
        >

            <img
            src= {imgUrl}
            alt={title}
            className='w-full h-36 md:h-48 object-contain cursor-pointer'
           />
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start
                    text-xs md:text-sm dark:text-white'> 
                        {stack.map(item => (
                            <span className='inline-block px-2
                            py-1 font-semibold border-2 border-stone-900
                            rounded-md dark:border-white'>
                                {item}
                            </span>
                        ))}
                    </p>
            </div> 
        </a>
  )
} 
export default PortfolioItem

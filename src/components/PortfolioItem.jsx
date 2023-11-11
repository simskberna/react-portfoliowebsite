import React, { Component } from 'react' 
const PortfolioItem = ({title,imgUrl,stack,link,githubLink}) => {
    return (
        <div className='flex flex-col border-2 border-stone-900 dark:border-white rounded-md  overflow-hidden'>
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='overflow-hidden'
        >

            <img
            src= {imgUrl}
            alt={title}
            className='p-5 w-full h-36 md:h-48 object-contain cursor-pointer'
            />
         </a>
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start
                    text-xs md:text-sm dark:text-white'> 
                        {stack.map(item => (
                            <span key={title} className='inline-block px-2
                            py-1 font-semibold border-2 border-stone-900
                            rounded-md dark:border-white'>
                                {item}
                            </span>
                        ))}
                    <a
                        href={githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='overflow-hidden'
                    >
                         <span className='inline-block px-2  text-[10px]
                            py-1 font-semibold border-2 border-stone-900
                            rounded-md dark:border-white dark:bg-[#995269] bg-[#f6ff7f]'>
                                {githubLink}
                        </span>
                    </a>
                      
                    </p>
            </div>
        </div>
       
  )
} 
export default PortfolioItem

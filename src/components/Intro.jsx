import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
        <div className='flex item-center justify-center flex-col 
        text-center pt-20 pb-6'> 
        <p className='text-base md:text-xl mb-3 front-medium'>👋 Hi, I'm Berna SIMSEK — A Passionate Frontend Developer 🚀</p>
        <p className='text-sm max-w-x1 mb-6 font-bold text-justify'> 
          With nearly 3 years of experience building user-centric web applications, I specialize in creating seamless, high-performance frontend experiences. I work primarily with React, Next.js, TypeScript, and Tailwind CSS to build clean, maintainable, and intuitive interfaces. 🌐✨ Alongside this, I use Material UI, Axios, and Context API to develop scalable features that improve user interactions. 🔧

          While frontend development is my main focus, I'm also comfortable working across the full stack. For personal projects, I use Node.js, Express.js, Java/Spring Boot, and PostgreSQL to build powerful backend services. 💻🔙

          In my earlier years, I worked with C# and Java to create automation tools and applications during college. 🎓💡 
        </p>
        <span className='text-sm max-w-x1 mb-6 text-justify'> 
              I also have experience deploying projects to the cloud using Google Cloud, Vercel, and AWS, ensuring they scale and perform seamlessly. ☁️📦 On top of that, I work with MongoDB and Firebase to handle data needs with speed and reliability. 📊🔒
              I'm always excited to collaborate, learn new technologies, and push the boundaries of what’s possible in web development. Let’s build something amazing together! 🤝🔥</span>
        </div>
    )
  }
}   
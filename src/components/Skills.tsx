import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 '>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-out">
          <h2 className='text-5xl md:text-5xl' data-aos="zoom-out">I am working with Technologies</h2>
           <p className='text-slate-700 pt-4'> I have a solid foundation in web development, specializing in HTML, CSS, and Javascript. My experience extends to using frame works like React and Next.js to create Dynamic and user-friendly application. I'm also proficient in Tailwind CSS for efficient styling and design. with a passion for learning, I say updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
        </div>
        <div>
        <h2 className='text-7xl md:text-5xl' data-aos="zoom-out">Skills</h2>
          <div className='grid grid-cols-2 text-red-700 text-5xl sm:text-4xl'>
            <div className='space-y-2'>
             <h2  data-aos="fade-down">Typescript</h2>
             <h2  data-aos="fade-down">HTML</h2>
             <h2 data-aos="zoom-in-up" >CSS</h2>
             </div>
             <div className='space-y-2'>
             <h2 data-aos="zoom-in-up">Next.js</h2>
             <h2 data-aos="zoom-in-up">Tailwind</h2> 
              <h2 data-aos="fade-down">CSS</h2>
             </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Skills

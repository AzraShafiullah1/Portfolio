import React from 'react'
import Heading from './Heading';
import Card from './Card';

  const data = [
  
    { 
      id:0,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume build with HTML and CSS, allowing users to showcase their skills dynamically.",
    img:"/project_01.png",
    tags:["HTML" , "Node", "CSS", "TypeScript"],
    
    },
  
    {
      id:1,
  title: "Dynamic Resume",
  desc: "A Typescript-based Dynamic resume build with HTML and CSS, allowing users to showcase their skills dynamically.",
  img: "/project_02.png",
  tags:["HTML" , "Node", "CSS", "TypeScript"],

},
{
  id:2,
title: "Edit Resume",
desc: "A Typescript-based Edit resume build with HTML and CSS, allowing users to showcase their skills dynamically.",
img: "/project_03.png",
tags:["HTML" , "Node", "CSS", "TypeScript"],

},

];

const Projects = () => {
  return (
    <div id= 'projects' className='container pt-40'>
      <Heading title='My Projects' />
     
      <div className='flex-col.md\:flex-row.w-full.h-screen.item-stretch.justify-center. md:justify-btween.gap-3.p-6mt-10'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
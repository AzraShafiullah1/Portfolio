import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  return (
    
  
  
    <div className='container pt-8'>
        <div className= 'flex h- 2 justify-between items-center'>
            <div className='text-xl text-cyan-600 font-extrabold'>Vision</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink' ><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
                </ul>
            <AiOutlineMenu className='md:hidden' size={50}/>
        
        </div>
      
    </div>
  )
}

export default Navbar

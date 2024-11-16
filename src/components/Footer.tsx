import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className='mt-18 py-1 text-center bg-sky-300'>
      <div className='flex gap-1 item-center'>
             <MdOutlineCopyright size={20}/>Vision | All rights reserved 2024.
            </div>
    </div>
  )
}

export default Footer

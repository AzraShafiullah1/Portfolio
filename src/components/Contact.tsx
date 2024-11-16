import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'  data-aos="flip-down"> Get in touch</h2>
            
            <div className='flex gap-3 item-center' data-aos="zoom-out">
            <IoIosMail size={24} /> xyz@gmail.com
            </div>
            <div className='flex gap-3 item-center' data-aos="zoom-out">
             <BsFillTelephoneFill size={24} /> (021) 129-329
            </div>
        </div>
       
        <div className='space-y-8'>
        <h2 className='text-5xl'  data-aos="flip-down">Start the</h2>
           <h2 className='text-5xl'  data-aos="flip-down">conversation</h2>

            <div className='flex  flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[30px] bg-orange-200 border border-black'
                id='name'/>
            </div>
            <div className='flex  flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type="text" 
                className='h-[30px] bg-orange-200 border border-black'
                id='email'/>
            </div>
            <div className='flex  flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                 <textarea 
                className='bg-orange-200 border border-black'
                id='msg' rows={4}>
                </textarea>
            </div>
            <button className='bg-violet-500 p-2 px-5'>Send</button>
        </div>
        </div>
    </div>
  )
}

export default Contact

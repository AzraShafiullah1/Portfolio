import React from 'react'
import Image from 'next/image';
interface propsType {
    title: string;
    desc: string;
    img:string;
    tags:string[];
}
const Card:React.FC<propsType>= ({title, desc, img, tags}) => {
  return (

      <div className='flex flex-col md:flex-row w-full h-screen item-stretch justify-center md:justify-btween gap-3px p-5mt-10'>
          <div className='boarder boarder-red-900 w-3/12 img sm:w-[350px]'>
        <Image 
        src={img}
        width={350}
        height={350}
        alt= {title}
            />
            
            </div>
       <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>

        <div>
            {tags.map((el) => (
            <div className='tags' key={el}>
                {el}

            </div>))}
        </div>
        </div>
        </div>
  )
}

export default Card




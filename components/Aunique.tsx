import React from 'react'
import Image from 'next/image';
import win from '../public/win.jpg';

const Aunique = () => {
  return (
    <div className='border border-b border-neutral-900 pl-40 pb-4 lg:pt-[8rem] md:py-[4rem] lg:mb-35 '>
        <h1 className='text-violet-300 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
            love to learn..
        </h1>
      
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8 h-1/3'>
                <div className='flex justify-center items-center overflow-auto'>
                    <Image 
                    src="win" 
                    alt="Trilanka" 
                    className='rounded-2xl w-80' 
                    />
                </div>
            </div>

            <div className='w-full lg:w-1/3'>
                <div className='flex font-light tracking-tighter justify-center lg:justify-start '>
                    <p className='my-2 max-w-xl py-6'>
                        I'm a quick learner, especially when it comes to tech! I recently won a major drone competition, all 
                        thanks to a project where I had to develop an AI model to control drones. I jumped right into 
                        learning the technology, and it paid off! Honestly, I think the reason I pick up new skills so fast 
                        is simple.. I love what I do! </p>
                </div> 
            </div>
      </div>
    </div>
    
  )
}

export default Aunique

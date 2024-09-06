import React from 'react'
import { Button } from './ui/MovingBorders'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20 " id='contact'>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:mx-w-[45vw]">
          Ready To take <span className='text-pink-300'>your</span> Digital Presence Into Next Level?
          </h1>
        <p className="text-white-200 md:mt-10 text-center">Reach out to me, If you Find Me Good For your employment requirements.</p>
        
        
        <a href="tstrilanka@gmail.com">
        <MagicButton 
          title={"Let's Get In Touch"} 
          icon={<FaLocationArrow />} 
          position={'right'} 
        />
      </a>
      
      </div>

      
      
    </footer>
  )
}

export default Footer

import React from 'react'

const AHero = () => {
  return (
    <div className="border-b border-neutral-900 pl-40 pb-4 pt-4 flex lg:mb-35 items-center w-full ">
        <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className='text-violet-300 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Trilanka Beddegama</h1> 
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">A fresh Graduate from university of Peradeniya specialized in Electrical and electronic engineering. 
                    My expertises lies on Computer Engineering, AI/ML/DL devopments. I am currently looking forward an Employer
                    i can expand my Career. </p>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:p-8 ">

                <div className="flex lg:justify-end md:justify-center ">
                    <img src="/profile.png" alt="trilanka" className='w-auto h-80 max-w-full max-h-full object-contain rounded-xl'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AHero

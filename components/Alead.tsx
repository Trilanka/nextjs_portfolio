import React from 'react'

const Alead = () => {
  return (
    <div className='overflow-auto pl-40 pb-4 pt-4 lg:mb-35 items-center w-full'>
        <div className='flex flex-wrap pt-20 '>
            <div className='flex items-center'>
                <h1 className='text-violet-300 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                    a leader to count on..
                </h1>
            </div>
        </div>

        <div className='w-full flex-wrap  pl-8 pt-12'>
            <div className='flex gap-30 w-full'>
                <p className="my-2 w-1/2 py-6 px-15 font-light tracking-tighter lg:items-start px-4 ">
                    I was a passionate volunteer thoughout my undergraduate life. I got the opportunity
                    to lead more 15 projects as chairperson and beign president of IEEE uop. what i found
                    by doing that is working with people is o0ne of my core strength.
                </p>
                <div className='ml-20'>
                <img src="/lead.jpg" alt="i dont" className='w-auto h-80 max-w-full max-h-full object-contain rounded-xl'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Alead

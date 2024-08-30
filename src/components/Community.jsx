import React from 'react'
import meetImg from '../assets/trade-meet.jpg';
import meetImg2 from '../assets/meet-people.jpg';

const Community = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full md:space-x-4 mt-10 md:mt-20 px-4 md:px-0'>
        <div className='relative w-full md:w-2/5 mb-8 md:mb-0'>
            <img className='rounded-md w-4/5 md:w-full' src={meetImg} alt="CommunityImg" />
            <div className='w-2/3 md:w-4/5 absolute bottom-[-20%] md:bottom-[-25%] right-[0%] md:right-[-20%]'>
                <img className='w-full rounded-md shadow-lg' src={meetImg2} alt="meet-peoppleImg" />
            </div>
        </div>
        <div className='flex flex-col mt-6 w-full md:w-2/5'>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight'>A Trading Community Dedicated To Your Success!</h1>
            <p className='mt-4 md:mt-8 text-lg md:text-xl text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className='mt-6 md:mt-10'>
                <a href="#" className='inline-block bg-gradient-to-r from-[#b0ff84] to-[#51ffab] py-3 font-semibold px-6 rounded-md hover:bg-gradient-to-r hover:from-[#51ffab] hover:to-[#b0ff84]'>
                    Explore Membership →
                </a>
            </div>
        </div>
    </div>
  )
}

export default Community;
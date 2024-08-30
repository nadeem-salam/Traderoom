import React from 'react'
import Testimonial1 from '../assets/Testimonial-01.jpg';
import Testimonial2 from '../assets/Testimonial-02.jpg';
import Testimonial3 from '../assets/Testimonial-03.jpg';
import Testimonial4 from '../assets/Testimonial-04.jpg';


const Apply = () => {
  const images = [
    Testimonial1, Testimonial2, Testimonial3, Testimonial4
    
  ];
  return (
    <div className='flex justify-center mt-20'>
      {/* Image Section */}
      <div className="rounded-xl w-11/12 h-80 bg-[url('/src/assets/laptop-01.png')] bg-cover bg-center">
            <h1 className="text-white w-4/5 md:w-2/5 ml-16 mt-8 tracking-tight md:text-4xl text-3xl font-bold">Apply to Join My Trading Challenge</h1>

            
            <div className="flex justify-start items-center mt-10 ml-12 space-x-[-16px]">
      {images.map((src, index) => (
        <div key={index} className="md:w-16 w-12 h-12 md:h-16 border-4 border-white rounded-full overflow-hidden z-10">
          <img src={src} alt={`Person ${index + 1}`} className="w-full h-full object-cover"/>
        </div>
        
      ))}
      <div>
        <p className='text-gray-300 ml-8 md:ml-16'>
      Join 584700+ traders inside</p>
      </div>
      
    </div>
            
            <div className='ml-16 mt-10'>
            <a href="#" className=' bg-gradient-to-r from-[#b0ff84] to-[#51ffab] py-3 font-semibold px-6 rounded-md hover:bg-gradient-to-r hover:from-[#51ffab] hover:to-[#b0ff84]'>Explore Membership →</a>
            </div>
    </div>
    </div>
  )
}

export default Apply;

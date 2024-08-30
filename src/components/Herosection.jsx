import React from 'react';
import { ArrowRight } from 'lucide-react';
import Testimonial1 from '../assets/Testimonial-01.jpg';
import Testimonial2 from '../assets/Testimonial-02.jpg';
import Testimonial3 from '../assets/Testimonial-03.jpg';
import Testimonial4 from '../assets/Testimonial-04.jpg';
import heroImg from '../assets/Heros-04.png';

const Herosection = () => {
  const images = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

  return (
    <div className="bg-[#c0ffea]">
      <div className="bg-[#0e525f] h-4/5 rounded-b-3xl text-white px-1">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h1 className="text-3xl mt-10 md:mt-0 md:text-5xl font-bold mb-4 text-center md:text-left">
                Your path to trading Mastery{' '}
                <span className="md:block text-[#2FFFB9]">starts here</span>
              </h1>
              <div className="flex justify-center md:justify-start mt-10">
                <a href="#" className="text-black bg-gradient-to-r from-[#b0ff84] to-[#51ffab] py-3 font-semibold px-6 rounded-md hover:bg-gradient-to-r hover:from-[#51ffab] hover:to-[#b0ff84] inline-flex items-center">
                  Explore Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center mt-10">
  <div className="flex -space-x-4 mb-4 sm:mb-0">
    {images.map((src, index) => (
      <div
        key={index}
        className="w-12 h-12 border-2 border-white rounded-full overflow-hidden"
      >
        <img
          src={src}
          alt={`Person ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
  <div className="flex flex-col items-center sm:items-start">
    <p className="text-gray-300 ml-4 text-center sm:text-left">
      15,000 Members Joined: Rated Excellent at <br />
      9.1/10 from 200 Reviews
    </p>
  </div>
</div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={heroImg} 
                alt="Trader" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
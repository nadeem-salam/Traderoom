import React from 'react';
import { FaStar } from 'react-icons/fa';
import People from '../assets/Testimonial-01.jpg'

const Testimonials = () => {
  return (
    <div className="bg-[#0c353a] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 mt-20 flex justify-center">
          <span className="bg-[#10505c] text-[#2befb4] text-sm px-4 py-1 rounded">TESTIMONIALS ⭐
          </span>
        </div>
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What our members <span className="text-[#2befb4]">are saying</span></h2>
        <p className="text-sm text-gray-400">(674029 REVIEWS OF TRADEROOM ONLINE)</p>
      </div>
      <div className="mt-10 max-w-3xl md:max-w-5xl mx-auto">
        <div className="bg-teal-900 p-8 rounded-lg shadow-lg text-left">
          <p className="md:text-xl text-md mb-6">"Traderoom’s stock trading strategies are straightforward and effective. I'm now making informed trades with confidence."</p>
          <div className="flex">
      <FaStar className="text-yellow-500 mr-1 mb-6" />
      <FaStar className="text-yellow-500 mr-1 mb-6" />
      <FaStar className="text-yellow-500 mr-1 mb-6" />
      <FaStar className="text-yellow-500 mr-1 mb-6" />
      <FaStar className="text-yellow-500 mr-1 mb-6" />
      
    </div>

       
          <div className="flex items-center justify-start">
            <img className="w-16 h-16 rounded-full" src={People} alt="Mia Hernandez" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Mia Hernandez</h4>
              <p className="text-green-400">Stock Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

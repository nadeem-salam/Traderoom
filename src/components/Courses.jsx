import React from 'react';
import course1 from '../assets/courses/course-1.jpg';
import course2 from '../assets/courses/course-2.jpg';
import course3 from '../assets/courses/course-3.jpg';
import course4 from '../assets/courses/course-4.jpg';

const Courses = () => {
  const levels = [
    {
      imgbar: course1,
      description: 'Technical Analysis',
      action: 'Over 2+ hours of Training Material',
      rate: '49'
    },
    {
      description: 'Crypto­currency',
      action: 'Over 2+ hours of Training Material',
      imgbar: course2,
      rate: '129'
    },
    {
      description: 'Entries & Exits',
      action: 'Over 2+ hours of Training Material',
      imgbar: course3,
      rate: '149'
    },
    {
      description: 'Essential Candlesticks',
      action: 'Over 2+ hours of Training Material',
      imgbar: course4,
      rate: '199'
    }
  ];

  return (
    <div className='flex flex-col lg:flex-row lg:justify-center lg:h-4/5 lg:p-8 lg:bg-green-50'>
      <div className="bg-[#0c353a] p-12 rounded-none md:rounded-3xl w-full lg:w-11/12 lg:mx-auto">
      <div className="mb-8 mt-20 flex justify-center">
          <span className="bg-[#10505c] text-[#2befb4] text-sm px-4 py-1 rounded">OUR PRODUCTS 💻</span>
        </div>
        <h2 className="md:text-5xl text-4xl text-center font-bold text-white mb-12">
          Our best trading{" "}
          <span className="text-[#2befb4]">courses</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-[#082723] to-[#0c383c] rounded-xl text-left w-11/12 mx-auto md:w-auto"
            >
              <img
                src={level.imgbar}
                alt={`${level.description} Course`}
                className="mx-auto w-full mb-4 rounded-t-xl"
              />
              <p className="text-white md:text-2xl text-xl font-semibold mb-2 pl-4">{level.description}</p>
              <a href="#" className="text-gray-400 pl-4">{level.action}</a>
              <div className="border-b border-[#5d5d5d] mx-auto mt-10 my-4 w-11/12"></div>
              <div className='flex justify-between items-center pb-10 pt-5'>
                <div className='flex flex-col'>
                  <p className='text-white text-sm pl-4'>Starting at:</p>
                  <h1 className='text-[#2befb4] pl-4'>$<span className='md:text-5xl text-2xl font-bold'>{level.rate}</span>.99</h1>
                </div>
                <div>
                  <a href="#" className='bg-gradient-to-r from-[#b0ff84] to-[#51ffab] py-3 md:font-semibold px-1 md:px-6 rounded-md hover:bg-gradient-to-r hover:from-[#51ffab] hover:to-[#b0ff84] mr-4'>Get courses now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

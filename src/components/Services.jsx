import React from 'react';
import beginnerImg from '../assets/bar-01.png';
import intermediateImg from '../assets/bar-02.png';
import advancedImg from '../assets/bar-03.png';

const Services = () => {
  const levels = [
    {
      title: 'BEGINNER',
      description: 'The best place to learn to trade. Period.',
      action: 'View Courses →',
      imgbar: beginnerImg
    },
    {
      title: 'INTERMEDIATE',
      description: 'Take your trading career to the next level.',
      action: 'Join Membership →',
      imgbar: intermediateImg
    },
    {
      title: 'ADVANCED',
      description: 'Collaborate with other professional traders.',
      action: 'Join Membership →',
      imgbar: advancedImg
    }
  ];

  return (
    <div className='flex flex-col lg:flex-row lg:justify-center lg:h-4/5 lg:p-8 lg:bg-[#c0ffea]'>
      <div className="bg-[#0c353a] p-12 rounded-none md:rounded-3xl w-full lg:w-11/12 lg:mx-auto">
        <div className="mb-8 mt-20 flex justify-center">
          <span className="bg-[#10505c] text-[#2befb4] text-sm px-4 py-1 rounded">OUR SERVICES 📈</span>
        </div>
        <h2 className="text-3xl md:text-5xl text-center font-bold text-white mb-12">
          Learn to trade with <br />
          <span className="text-[#2befb4] text-3xl md:text-5xl">technical analysis</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div key={index} className="bg-gradient-to-t from-[#082723] to-[#0c383c] p-8 rounded-xl text-center transition duration-300 ease-in-out hover:bg-gray-800 hover:border hover:border-[#2befb4] ">
              <h3 className="text-[#2befb4] mb-4">{level.title}</h3>
              <img src={level.imgbar} alt={`${level.title} Level`} className="mt-10 mx-auto h-24 mb-4" />
              <p className="text-white text-xl mt-16 font-semibold mb-2">{level.description}</p>
              <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet</p>
              <a href="#" className="text-[#2befb4] hover:underline">{level.action}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

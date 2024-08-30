import React from 'react';
import { partners } from '../constants/Content';

const PartnerSection = () => {
  return (
    <div className="bg-[#c0ffea] py-16 max-w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-md text-gray-700 mb-12">
          Collaborated with over 800+ trusted worldwide partners
        </h2>
        <div className="overflow-x-auto whitespace-nowrap flex items-center">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.logo} 
              alt={`${partner.name} logo`}
              className="h-16 mx-7 my-2 inline-block opacity-40 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import lpImg from '../assets/provider/Icon-1.png'
import lpImg2 from '../assets/provider/Icon-2.png'
import lpImg3 from '../assets/provider/Icon-3.png'
import lpImg4 from '../assets/provider/Icon-4.png'
import lpImg5 from '../assets/provider/Icon-5.png'
import lpImg6 from '../assets/provider/Icon-6.png'

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg hover:border hover:border-black hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl text-[#0e3b43] font-bold mb-2">{title}</h2>
        <p className="text-gray-500 md:text-md text-sm">{description}</p>
      </div>
      <div className="flex flex-col items-center ml-4">
      <FaArrowRight className="text-neutral-500 w-8 h-6" />

        <img src={icon} alt={`${title} icon`} className="w-20 h-20 mr-2 mt-4" />
      </div>
    </div>
  );
};

const Provider = () => {
  const cards = [
    {
      title: "Stocks Trading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg, 
    },
    {
      title: "Forex Trading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg2, 
    },
    {
      title: "Cryptos Trading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg3, 
    },
    {
      title: "Stocks Indices",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg4,
    },
    {
      title: "Commodities Trading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg5, 
    },
    {
      title: "Bonds Trading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: lpImg6,
    },
  ];

  return (
    <div className="container mx-auto md:mt-40 px-4 py-12">
      <h1 className="md:text-4xl text-2xl text-[#0e3b43] leading-tight font-extrabold text-center mb-8">
        Our Trading Learning Provider
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Provider;

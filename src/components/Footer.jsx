import React from 'react';
import logo from '../assets/logo-trade.png';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const footerSections = [
  {
    title: 'Home',
    items: ['Home', 'Membership', 'About', 'Contact']
  },
  {
    title: 'Services',
    items: ['Trading Courses', 'The Swing Report', 'Indicators', 'Tradepro Alerts']
  },
  {
    title: 'Products',
    items: ['Articles', 'Educational Videos', 'E-Books & Guides', 'Trading Tools']
  },
  {
    title: 'Resources',
    items: ['Traderoom Blog', 'Success Stories', 'Terms of Service', 'Privacy Policy']
  },
  {
    title: 'Contacts',
    items: [
      { name: 'Facebook', icon: Facebook },
      { name: 'Twitter', icon: Twitter },
      { name: 'Youtube', icon: Youtube },
      { name: 'Instagram', icon: Instagram }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0c3134] to-[#0a2b2a] mt-20 rounded-t-3xl text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Trade Room Logo" className="mb-4 h-16" />
          <p className="text-center text-sm sm:text-base lg:text-lg mt-6 mb-4 max-w-2xl">
            Subscribe to our newsletter and we will keep you informed about upcoming webinars,
            news, events and updates to our products.
          </p>
          <div className='p-2 mt-8 bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-lg mx-auto rounded-xl'>
            <div className="flex justify-center items-center w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow w-2/3 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-black hover:bg-teal-600 px-6 py-2 rounded-r-md transition-colors text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="ml-4 pb-4 md:pb-0">
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#FFFFFF80] py-1 text-lg hover:text-white mb-1">
                    <a href="#" className="flex items-center">
                      {section.title === 'Contacts' && (
                        <item.icon className="mr-2 text-white" size={20} />
                      )}
                      {section.title === 'Contacts' ? item.name : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center'>
  <div className="flex flex-row  items-center">
    <a href="#" className='text-sm m-1 md:m-2'>Disclaimer |</a>
    <a href="#" className='text-sm m-1 md:m-2'>Privacy Service |</a>
    <a href="#" className='text-sm m-1 md:m-2'>Corporation</a>
  </div>
  <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
    <a href="#" className='text-sm md:mr-2 text-center md:text-left'>Copyright © 2024 Traderoom | Powered by Onecontributor</a>
  </div>
</div>
    </footer>
  );
};

export default Footer;
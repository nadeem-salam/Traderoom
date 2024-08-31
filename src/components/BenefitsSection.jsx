import React from 'react';
import { BarChart, Eye, Users, PlayCircle } from 'lucide-react';
import image1 from '../assets/Icon-015-1.png';
import image2 from '../assets/Icon-016-1.png';
import image4 from '../assets/Icon-017.png';

const benefits = [
    {
        icon: BarChart,
        value: '12',
        label: 'New Lessons Weekly',
    },
    {
        icon: Eye,
        value: '50M',
        label: 'Views Videos',
    },
    {
        icon: Users,
        value: '535K',
        label: 'Total Subscribers',
    },
    {
        icon: PlayCircle,
        value: '2K',
        label: 'Lessons Video',
    },
];

const benefitsCard = [
    {
        heading: 'Discuss charts in our channels',
        para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
        learnmore: 'Learn more →',
        
    },
    {
        heading: 'Educational videos Library',
        para: 'Lorem ipsum dolor sit amet consectetur odio elit feugiat diam',
        learnmore: 'Learn more →',
        image: image2,
    },
    {
        heading: 'Guidance when you need it',
        para: 'Lorem ipsum dolor sit amet consectetur odio elit feugiat diam',
        learnmore: 'Learn more →',
        
    },
    {
        image: image4,
    },
];

const BenefitsSection = () => {
    return (
        <div className="bg-green-50 py-16">
            <div className="max-w-10xl mx-auto flex flex-col items-center justify-start">
                <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-gray-900 mb-4">
                    Benefits of joining our course
                </h2>
                <p className="text-gray-500 p-1 text-md md:text-lg max-w-2xl text-center mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                            <benefit.icon className="h-12 w-12 bg-[#0c353a] rounded-full p-2 text-[#2fffb9] mb-4" />
                            <div className="flex flex-col ml-2">
                                <h3 className="relative text-3xl font-bold text-gray-900 text-left">{benefit.value}<span className="text-lg absolute top-0 ml-1">+</span></h3>
                                <p className="text-black text-sm text-left">{benefit.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
                    {benefitsCard.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-[#0c353a] rounded-xl p-10 pr-20 relative"
                            style={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: '100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '300px'
                            }}
                        >
                            <h1 className="text-white text-3xl mb-4 font-bold">{card.heading}</h1>
                            <p className="text-gray-300 text-sm mb-10">{card.para}</p>
                            <a href="#" className="text-white hover:text-[#2fffb9]">{card.learnmore}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;

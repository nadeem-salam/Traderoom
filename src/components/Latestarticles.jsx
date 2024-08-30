import React from 'react';
import article1 from '../assets/article-1.jpg'
import article2 from '../assets/article-2.jpg'
import article3 from '../assets/article-3.jpg'

const articles = [
  {
    title: "How to Use TradingView",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    image: article1,
    category: "Articles"
  },
  {
    title: "The Newest AI Stock Spike",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    image: article2,
    category: "Articles"
  },
  {
    title: "What to do in a slow market?",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    image: article3,
    category: "Articles"
  }
];

const Latestarticles = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Latest Articles</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img className="w-full h-64 rounded-lg object-cover" src={article.image} alt={article.title} />
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500">{article.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{article.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{article.author} • {article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestarticles;

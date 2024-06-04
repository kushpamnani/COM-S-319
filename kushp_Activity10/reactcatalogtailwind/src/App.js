/*
Author: Kush Pamnani
*/

import React, { useState } from 'react';
import { Products } from './Products';
import { Categories } from './Categories';
import logo from './logo.png'; // Update the path to the location of your logo image

const App = () => {
  const [productsCategory, setProductsCategory] = useState(Products);

  const handleCategoryClick = (category) => {
    const filteredProducts = category === 'all' ? Products : Products.filter((product) => product.category === category);
    setProductsCategory(filteredProducts);
  };

  const renderProducts = () => {
    return productsCategory.map((product) => (
      <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-2 bg-white">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          {/* Ensure image covers the area nicely without being cut off */}
          <img className="object-contain h-full" src={product.image} alt={product.title} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">${product.price}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="App flex">
      <aside className="sidebar bg-slate-800 text-white p-5 w-1/5">
        <div className="logo-container mb-6" style={{ width: '200px', margin: '0 auto' }}>
          <img src={logo} alt="Company Logo" style={{ width: '100%', height: 'auto' }} />
        </div>
        <h1 className="text-xl font-bold mb-4">Product Catalog App</h1>
        <p className="mb-4">by Design Shubham, Development Abraham</p>
        {Categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="block bg-orange-500 text-white py-2 px-4 rounded-full mb-2 text-sm"
          >
            {category}
          </button>
        ))}
      </aside>
      <main className="products-container flex-1 p-5">
        <div className="flex flex-wrap justify-start">
          {renderProducts()}
        </div>
      </main>
    </div>
  );
};

export default App;

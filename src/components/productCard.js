import React from 'react';

function ProductCard({ imageUrl, productName, price }) {
  return (
    <div className="max-w-48 rounded overflow-hidden shadow-lg">
      <div className="relative group">
        <img className="w-full h-40 w-40 transition-transform duration-300 transform group-hover:scale-105" src={imageUrl} alt={productName} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50">
          <button className="bg-white text-gray-800 py-2 px-4 rounded">Agregar al carrito</button>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">Precio: ${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
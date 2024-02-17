import React from 'react';

function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center">
      <button className="px-2 py-1 bg-gray-200 rounded-l" onClick={onDecrease}>-</button>
      <span className="px-4">{quantity}</span>
      <button className="px-2 py-1 bg-gray-200 rounded-r" onClick={onIncrease}>+</button>
    </div>
  );
}

export default QuantitySelector;
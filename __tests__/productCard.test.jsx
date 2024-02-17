
import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '@/components/productCard';

describe('ProductCard Component', () => {
  test('should render product details correctly', () => {
    const product = {
      imageUrl: 'example.jpg',
      productName: 'Apple',
      price: 1.5,
    };

    const { getByText, getByAltText } = render(<ProductCard {...product} />);

    expect(getByAltText(/Apple/)).toBeInTheDocument();
    expect(getByText(/Apple/)).toBeInTheDocument();
    expect(getByText(/1.5/)).toBeInTheDocument();
  });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavContent from './NavContent'; 

test('renders NavContent correctly', () => {

 
    render(<NavContent />);
    
  const brandElement = screen.getByText(/GoDaddy/i); 
  const userElement = screen.getByText(/Admin/i); 

  expect(brandElement).toBeInTheDocument();
  expect(userElement).toBeInTheDocument();
});

import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchBarProduct from './SearchBarProduct'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))

describe('SearchBar Product', () => {
    test('should render the search input', () => {
      render(<SearchBarProduct search={() => {}} par={[]}/>);
      const searchInput = screen.getByPlaceholderText("Search Product");
      expect(searchInput).toBeInTheDocument();
    })
    
    test('should display search results ', () => {
      const par = [
          {productId: 1, productName: 'Product 1'},
          {productId: 2, productName: 'Product 2'},
        ]
        render(<SearchBarProduct search={() => {}} par={par}/>);
        const searchResults = screen.getAllByRole('link');
        expect(searchResults).toHaveLength(2);
    })
    
    
})
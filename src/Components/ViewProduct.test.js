import React from "react";
import { render, screen, waitFor } from '@testing-library/react'
import Viewproduct from "./Viewproduct";
import { loadSingleProduct } from "../Service/product-service";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock('../Service/product-service', () => ({
    loadSingleProduct: jest.fn(),
}))


describe('View Product', () => {
    test('should render product details', async () => {
        const mockProduct = {
            productId: 1,
            productName: 'Example Product',
            productPrize: 10,
            productDesc: 'Example description',
            stock: true,
        };

        loadSingleProduct.mockResolvedValue(mockProduct);

        // setProduct.mockResolvedValue(mockProduct);
        render(
            <MemoryRouter initialEntries={['/viewproduct/1']}>
                <Routes>
                    <Route path="viewproduct/:productId" element={<Viewproduct />} />
                </Routes>
            </MemoryRouter>
        )

        await waitFor(() => {
            expect(loadSingleProduct).toHaveBeenCalledTimes(1);
        });
        // console.log(loadSingleProduct(1));
        
        // expect(screen.getByText(/Loading...!/)).toBeInTheDocument();

        expect(screen.getByText(/Example Product/)).toBeInTheDocument();

        expect(screen.getByText(/Example description/i)).toBeInTheDocument();

        expect(screen.getByText(/10/i)).toBeInTheDocument();

        expect(screen.getByRole('button', {name: 'Back'})).toBeInTheDocument();
        
        expect(screen.getByRole('button', {name: 'Add To Cart'})).toBeInTheDocument(); 

    })

})
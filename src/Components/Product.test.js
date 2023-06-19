import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Product from "./Product";
import { MemoryRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
// import { createMemoryHistory } from "@remix-run/router";
import { login, checkLogin } from "../auth";
import * as auth from "../auth";

jest.mock('../auth', () => ({
    checkLogin: jest.fn(),
}))

jest.mock('react-toastify', () => ({
    toast: {
        error: jest.fn(),
    },
}))

describe('Product component', () => {
    test('should render Product details ', () => {
        const product = {
            productId: '123',
            productName: 'Test Product',
            category: {
                title: 'Test Category',
            },
            productPrize: 100,
            stock: true,
        };
        const addToCartMock = jest.fn();

        render(
            <MemoryRouter>
                <Product product={product} addToCart={addToCartMock}> </Product>;
            </MemoryRouter>
        )

        expect(screen.getByText(/Test Product/i)).toBeInTheDocument();

        expect(screen.getByText(/Test category/i)).toBeInTheDocument();

        expect(screen.getByText(/100/i)).toBeInTheDocument();

        if(expect(screen.getByRole('button', {name: 'Not Available'})).toBeInTheDocument()){

            expect(screen.getByRole('link', {name: 'View Product'})).toBeInTheDocument();
            
            expect(screen.getByRole('button', {name: 'Add To Cart'})).toBeInTheDocument();    
        }

    });
})
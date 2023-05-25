import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Store from "./Store";

describe('Store Component', () => {
    test('render Store Component and load products', async() => {
        // render(
        //     <MemoryRouter initialEntries={['/store']}>
        //         <Routes>
        //             <Route path="/store" element={<Store />} />
        //         </Routes>
        //     </MemoryRouter>
        // )

        render(
            <MemoryRouter>
                <Store/>
            </MemoryRouter>
        )
        expect(screen.getByText('Category')).toBeInTheDocument();
        expect(screen.getByText('Product')).toBeInTheDocument();

        // const productTitle = /Iphone 12/i;
        // const productElement = screen.getByText(productTitle);
        // expect(productElement).toBeInTheDocument();

        const loadingElement = screen.queryByText('Loading...');
        expect(loadingElement).not.toBeInTheDocument();

        // expect(screen.getByText('Loading...')).toBeInTheDocument();
    })
})
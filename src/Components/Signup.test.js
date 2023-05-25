import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from "./Signup";
import { createUser } from "../Service/user-Service";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";

jest.mock('../Service/user-Service', () => ({
    createUser: jest.fn(),
}));

describe('Signup component', () => {
    test('should render signup form', () => {
        const history = createMemoryHistory();

        render(
            <MemoryRouter initialEntries={['/signup']}>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/about/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mobile number/i)).toBeInTheDocument();
        expect(screen.getByText(/signup/, { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText(/reset/i)).toBeInTheDocument();
    })

    test('should submit the form and register user', async () => {
        createUser.mockResolvedValueOnce({ data: { message: "User registered" } });

        render(
            <MemoryRouter initialEntries={['/signup']}>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "test1" } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test" } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123" } });
        fireEvent.change(screen.getByLabelText(/address/i), { target: { value: "abc Nagar" } });
        fireEvent.change(screen.getByLabelText(/about/i), { target: { value: "About Me" } });
        fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: "Male" } });
        fireEvent.change(screen.getByLabelText(/mobile number/i), { target: { value: "1234567890" } });

        fireEvent.click(screen.getByText('signup', { selector: 'button' }))

        expect(createUser).toHaveBeenCalledWith({
            name: 'test1',
            email: 'test@test',
            password: '123',
            address: 'abc Nagar',
            about: 'About Me',
            gender: 'Male',
            phone: '1234567890'
        })

        // await waitFor(() => screen.getByText(/"User registered/i));

        // expect(await screen.getByText(/"User registered/i)).toBeInTheDocument();
    })



})
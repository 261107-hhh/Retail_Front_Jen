import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { generateToken } from "../Service/user-Service";
import { MemoryRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
// import { createMemoryHistory } from "@remix-run/router";
import { login, checkLogin  } from "../auth";
import * as auth from "../auth";

jest.mock('../Service/user-Service', () => ({
    generateToken: jest.fn(),
}));

jest.mock('../auth', () => ({
    login: jest.fn(),
    checkLogin: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}))


describe('Login component', () => {
    test('should render Login form', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    });

    test('should submit Login form and login user', async () => {
        generateToken.mockResolvedValueOnce({data:{ token: '1234567890'} });

        const mockNavigate = jest.fn();
        const mockLogin = jest.fn();
        const mockGenerateToken = jest.fn();
        // const loginMock = jest.spyOn(auth, 'login').mockImplementation(mockLogin);
        auth.login=mockLogin;
        useNavigate.mockReturnValue(mockNavigate);
        generateToken.mockReturnValue(mockGenerateToken);
        // login.mockReturnValue(mockLogin);
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'test@test' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123' } });

        fireEvent.click(screen.getByText('Submit', { selector: 'button' }))
        // fireEvent.submit(screen.getByText('Submit', {selector: 'button'}))

        expect(generateToken).toHaveBeenCalledWith({
            username: 'test@test',
            password: '123'
        });


        // await waitFor(() => expect(login).toHaveBeenCalled());
        // await waitFor(() => expect(mockLogin).toHaveBeenCalled());
        
        // expect(mockLogin).toHaveBeenCalledWith({token: '1234567890'});

        // expect(mockNavigate).toHaveBeenCalledWith('/store/all');

        // expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    });

})
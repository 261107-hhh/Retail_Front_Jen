// import { render, screen } from '@testing-library/react';
// import App from './App';
// import About from './Components/About';
// import CustomNavbar from './Components/CustomNavbar';

// test('renders welcome', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Welcome to My Store/i);
//   const linkElement1 = screen.getByText(/What is an About Us Page?/i);
// expect(linkElement).toBeInTheDocument();
// expect(linkElement1).toBeInTheDocument();
// });


// test('renders About from app', () => {
//   const res = render(<App />);
//   // console.log(res);
//   // const linkElement = screen.getByText(/Welcome to My Store/i);
//   const linkElement1 = screen.getByText(/What is an About Us Page?/i);
// // expect(linkElement).toBeInTheDocument();
// expect(linkElement1).toBeInTheDocument();
// });

// // test('renders About', () => {
// //   const res = render(<About />);
// //   console.log(res);
// //   // const linkElement = screen.getByText(/Welcome to My Store/i);
// //   // <h2>What is an About Us Page?</h2>
// //   // const linkElement1 = screen.getByText(/What is an About Us Page?/i);
// //   // const linkElement1 = screen.getByDisplayValue(/What is an About Us Page?/i);
// //   const linkElement1 = screen.getByLabelText(/What is an About Us Page?/i);
// //   console.log(linkElement1);
// // // expect(linkElement).toBeInTheDocument();
// // // expect(linkElement1).toBeInTheDocument();
// // });

// test('render  navbar', () =>{
//   // /render(<CustomNavbar/>);
//   const res = render(<App />);
//   screen.get
// })


import React from "react";
import { render, screen } from '@testing-library/react'
import { Route, MemoryRouter, Routes, useParams } from "react-router-dom";
import App from "../../App";
// import About from "../ComponentsAbout";
import About from "../../Components/About";
import Login from "../../Components/Login";
import Signup from "../../Components/Signup";
import Store from "../../Components/Store";
import Viewproduct from "../../Components/Viewproduct";
import Cart from "../../Components/Cart";
import Dashboard from "../../Components/Dashboard";
import Banner from "../../Components/Banner";

describe('Render App', () => {
  test('should render app without errors', () => {
    render(<App />);
  })

  test('should render Navbar', () => {
    render(<App />);;
    const text = screen.getAllByRole('link');
    const str = text[0];
    expect(str).toBeInTheDocument();

  })

  test('should render Banner', () => {
    render(
      <MemoryRouter initialEntries={['/banner']}>
        <Routes>
          <Route path ="/banner" element ={<Banner />}>
          </Route>
        </Routes>
      </MemoryRouter>
    )
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('react-multi-carousel-track');

  })


  describe('Render Pages', () => {

    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'),
    //   useParams: () => ({}),
    // }));

    test('should render about Page', () => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </MemoryRouter>
      );

      const element = screen.getByText(/Welcome to My Store/);
      expect(element).toBeInTheDocument();
    })

    test('should render Login Page', () => {
      render(
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </MemoryRouter>
      );

      const name = screen.getByLabelText(/Username/);
      expect(name).toBeInTheDocument();

      const btn = screen.getByRole('button')
      expect(btn).toHaveClass('btn btn-success btn-sm d-block w-100 active')

    })

    test('should render SignUp Page', () => {
      render(
        <MemoryRouter initialEntries={['/signup']}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </MemoryRouter>
      );

      const name = screen.getByLabelText(/Name/);
      // const req1 = screen.getByPlaceholderText(/Enter Your Name Here/);
      // const req2 = screen.getByPlaceholderText(/Enter Your Email Here/);
      // expect(req1).required();
      const email = screen.getByLabelText(/Email/);
      expect(email).toBeInTheDocument();
      expect(name).toBeInTheDocument();

    })

    test('should render Store Page', async () => {
      await render(
        <MemoryRouter initialEntries={['/store/all']}>
          <Routes>
            <Route path="store/all" element={<Store />} />
          </Routes>
        </MemoryRouter>
      );

      const name = screen.getByText(/Category/);
      const detail = screen.getByText(/Product/);
      expect(name).toBeInTheDocument();
      expect(detail).toBeInTheDocument();

    })

    test('should render Cart Page', () => {
      render(
        <MemoryRouter initialEntries={['/cart']}>
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      );

      const text = screen.getByText(/Loding.../);
      expect(text).toBeInTheDocument();
    })

    test('should render users Cart', () => {
      render(
        <MemoryRouter initialEntries={['/user/cart']}>
          <Routes>
            <Route path="/user/cart" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      );

      const text = screen.getByText(/Loding.../);
      expect(text).toBeInTheDocument();
    })

    // Only after login we can do this.
    // test('should render Dashboard ', () => {
    //   render(
    //     <MemoryRouter initialEntries={['/dashboard']}>
    //       <Routes>
    //         <Route path="/dashboard" element={<Dashboard />} />
    //       </Routes>
    //     </MemoryRouter>
    //   );

    //   const text = screen.getByText(/Not Available/);
    //   // screen.getByRole()
    //   expect(text).toBeInTheDocument();
    // })

    // test('should render User Dashboard Page', () => {
    //   render(
    //     <MemoryRouter initialEntries={['/user/dashboard']}>
    //       <Routes>
    //         <Route path="/user/dashboard" element={<Dashboard />} />
    //       </Routes>
    //     </MemoryRouter>
    //   );

    //   const text = screen.getByText(/Not Available/);
    //   // screen.getByRole()
    //   expect(text).toBeInTheDocument();
    // })



  })

})
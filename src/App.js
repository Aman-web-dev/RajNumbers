import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from '../src/components/Navbar'
import { useEffect } from 'react';
import Aos from 'aos';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  useEffect(()=>{
    console.log("Aos is Configured")
    Aos.init({duration:2000})
})
  return (

    <>
    <Nav/>
    {/* <Navbar/> */}
    <Outlet/>
    <Footer/>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: '/about',
        element: <About />
      },

    ]
  }
]);

export default App;

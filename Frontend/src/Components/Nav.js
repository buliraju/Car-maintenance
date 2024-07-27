import React, { useEffect } from 'react';
import './Nav.css';
import ScrollToTopButton from './Scroll';
import { Link } from 'react-router-dom';
import Imageslider from './imageslider';
import Aboutus from './aboutus';
import Process from './process';
import Form from './form';
import Brands from './brands';
import City from './city';
import Hfoot from './hfoot';
import Navbar from './Navbar';

function Nav() {
  useEffect(()=>{
    if(!localStorage.getItem('username')){
      alert("please login your account")
      window.location.href='/'
    }
  },[])
  return (
    <div>
      <Navbar/>
      <Imageslider/>
      <Aboutus/>
      <Process/>
      <Form/>
      <Brands/>
      <City/>
      <ScrollToTopButton/>
      <Hfoot/>
    </div>
  );
}

export default Nav;

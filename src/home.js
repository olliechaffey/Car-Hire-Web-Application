import React from 'react';
import './App.css';
import NavtopHome from "./navTopHome.js";
import NavSecond from "./navSecond.js";
import ReserveSection from "./reserve.js";

const Home = () => {
  return (
    <div>
      <NavtopHome />
      <NavSecond />
      <ReserveSection />
    </div>
  );
}

export default Home;

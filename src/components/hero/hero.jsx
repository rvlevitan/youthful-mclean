import React from 'react';
import Clock from './clock';
import Greeting from './greeting';

const Hero = () => (
  <header className="home-header contain">
    <div className="home-header__right-text">
      <h1>New York</h1>
      <h1 className="home-header__city">City</h1>
    </div>
    <div className="home-header__description">
      <h1>Design</h1>
      <h1>Director</h1>
    </div>
    <div className="home-header__work home-header__grid">
      <div className="home-header__arrow">
        <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white" />
        </svg>
      </div>
      <h1 className="home-header__col-4-5">at</h1>
      <h1 className="home-header__col-6-12">
        <>
          Fix
          <br />
          Studio
        </>
      </h1>
    </div>
    <div className="home-header__meta home-header__grid">
      <div className="home-header__clock">
        <Clock />
        <h2>EST</h2>
      </div>
      <div className="home-header__greeting">
        <Greeting />
      </div>
    </div>
  </header>
);

export default Hero;

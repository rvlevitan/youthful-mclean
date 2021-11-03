import React, { globalHistory, useState, useEffect, useRef } from "react"
import Scrollbar from 'smooth-scrollbar';
import Navigation from './navigation/navigation';

const SmoothScroll = ({ children, color }) => {

  useEffect(() => {

    var scrollbar = Scrollbar.init(
      document.querySelector('.scroll-container'), {
      damping: 0.07,
      renderByPixels: true,
      continuousScrolling: false,
      alwaysShowTracks:false
    }
    );
  });

  return (
    <>
      <div className="main">
        <Navigation color={color} />
        <div className="scroll-container">
          <div className="smooth-scroll">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default SmoothScroll;

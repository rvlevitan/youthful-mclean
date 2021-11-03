import React from 'react';
import Transition from '../transition/transition';

const Navigation = (props) => {
  const navigation = props;
  return (
    <>
      <nav className="navigation">
        <Transition className="navigation__link" to="/" color="#ffffff" background="#000000">
          <h3 style={{ color: navigation.color }} className="navigation__text navigation__text--logo">
            Ryan Levitan
          </h3>
        </Transition>
        <Transition className="navigation__link" to="/info" color="#000" background="#ffffff">
          <h3 style={{ color: navigation.color }} className="nav-text">
            Info
          </h3>
        </Transition>
      </nav>
    </>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, location }) => {
  return (
    <>
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Layout;

import PropTypes from 'prop-types';
import React from 'react'

const Menu = ({ classes = "", children }) => {
  return (
    <div className={`menu ${classes}`}>{children}</div>
  );
}

Menu.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.any,
}

export default Menu;
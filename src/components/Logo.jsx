import React from "react";
import logo from "../assets/logo-icon.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ classes = "" }) => {
  return (
    <Link
      to='/'
      className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
      <div className='flex items-center gap-1 text-xl font-semibold'>
        <img
          src={logo}
          alt='Luna-logo'
          width={30}
          height={20}
          className='max-w-max'
        />
        <p className='text-light-onSurface dark:text-dark-onSurface'>Luna</p>
      </div>
    </Link>
  );
};

Logo.propTypes = {
    classes: PropTypes.string,
}

export default Logo;

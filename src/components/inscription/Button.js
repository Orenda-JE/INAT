import React from 'react';
import './Button.css';
const Button = ({ text }) => {
  return <button className='butt' type="submit">{text}</button>;
};

export default Button;
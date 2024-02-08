import React from 'react';
import './InputField.css';
const InputField = ({ type, label, placeholder }) => {
  return (
    <div className='input'>
      <label htmlFor={`input-${type}`}>{label}</label>
      <input type={type} id={`input-${type}`} placeholder={placeholder}/>
    </div>
  );
};

export default InputField;
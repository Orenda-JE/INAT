import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder,className, value, name, onChange }) => {
  return (
    <div className="input">

      <input type={type} id={`input-${type}`} placeholder={placeholder} className={className} value={value} name={name} onChange={onChange}/>
    </div>
  );
};

export default InputField;

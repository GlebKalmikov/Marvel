import './input.scss';
import React, { useState, useRef } from 'react';
import Button from '../Button/Button';

const Input = ({ name, label }) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  const handleInputClick = () => {
    inputRef.current.focus();
  };

  const handleInputBlur = () => {
    setShowInput(false);
  };

  const handleSearch = () => {
    // Виконайте необхідні дії для пошуку
    console.log('Search clicked');
  };

  return (
    <div className='input-size'>
      <label htmlFor={name}>{label}</label>
      <button className="arrow-button" onClick={handleButtonClick}></button>
      {showInput && (
        <input
          className='input'
          ref={inputRef}
          name={name}
          type="text"
          placeholder="City"
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        />
      )}
      {showInput && (
        <Button  onClick={handleSearch}>Search</Button>
      )}
    </div>
  );
};

export default Input;


"use client";

import React from 'react'

const CustomButton = ({title, containerStyles, handleClick }) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={'custom-btn'}
        onClick={handleClick}
    > 
      <span>
        {title}
      </span>
    </button>
  );
};

export default CustomButton
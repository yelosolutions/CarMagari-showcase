"use client";

import React from 'react';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick, btnType, titleStyles, rightIcon} : CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType||'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    > 
      <span className={`flex-1 ${titleStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            fill
            className='object-contain'
            alt='right arrow'
          />
        </div>)
      }
    </button>
  );
};

export default CustomButton;
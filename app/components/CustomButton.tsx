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
      <span className={titleStyles}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative'>
          <Image
            src={rightIcon}
            width={6}
            height={6}
            className='object-contain'
            alt='right arrow'
          />
        </div>)
      }

    </button>
  );
};

export default CustomButton;
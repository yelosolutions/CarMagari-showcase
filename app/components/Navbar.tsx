import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
        <Link
          href='/'
          className='flex justify-center items-center'
        >
          <Image
            src='/ma.svg'
            alt='CarMagari logo'
            width={200}
            height={100}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='Sign In'
          containerStyles='rounded-full p-2 text-white bg-indigo-500'
          btnType='button'
        />
      </nav>
    </header>
  )
};

export default Navbar;
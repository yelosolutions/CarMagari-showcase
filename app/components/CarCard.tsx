'use client';

import { useState } from 'react';
import { CarProps } from '@/types';
import Image from 'next/image';
import { calculateCarRent } from '@/utils';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';


interface CarCardProps {
  car: CarProps;
};



const CarCard = ({car}: CarCardProps) => {
  const {city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year} = car; 

  const constant = 2.352146; 
  const city_kmpl = city_mpg / constant;
  const carRent = calculateCarRent(city_kmpl, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card">
      <p className="car-card__price">
          <span className='car-card__price-shillings'>
            Ksh
          </span>
          {carRent}
          <span className='car-card__price-day'>
            /day
          </span>
      </p>
      <div className="car-card__image">
        <Image 
          src='/hero.png'
          fill
          priority
          className='object-contain'
          alt='car make'
        />
      </div>
      
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <div className='group relative flex w-full mt-2'>
        <div className="car-card__icon-container">
          <div className='car-card__icon'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              className='object-contain'
              alt='steering'
            />
            <p className='car-card__icon-text'>
              {transmission==='a'? 'Automatic': 'Manual'}
            </p>
          </div>
          <div className='car-card__icon'>
            <Image
              src='/tire.svg'
              width={20}
              height={20}
              className='object-contain'
              alt='tire'
            />
            <p className='car-card__icon-text'>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='car-card__icon'>
            <Image
              src='/gas.svg'
              width={20}
              height={20}
              className='object-contain'
              alt='gas'
            />
            <p className='car-card__icon-text'>
              {city_kmpl.toFixed(1)}Km/Ltr
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title='View more'
            containerStyles='w-full py-[16px] rounded-full bg-indigo-500'
            titleStyles='text-white text-[14px] font-bold leading-[17px]'
            btnType='button'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
      
    </div>
  );
};

export default CarCard;
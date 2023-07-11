import React from 'react';
import { CarProps } from '@/types';
import Image from 'next/image';
import { calculateCarRent } from '@/utils'; 


interface CarCardProps {
  car: CarProps;
};



const CarCard = ({car}: CarCardProps) => {
  const {city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year} = car; 

  const constant = 2.352146; 
  const city_kmpl = city_mpg / constant;
  const carRent = calculateCarRent(city_kmpl, year);
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
          className='object-contain'
          alt='car make'
        />
      </div>
      
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
    </div>
  );
};

export default CarCard;
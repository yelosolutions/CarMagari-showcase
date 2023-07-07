"use client"
import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleClick = () => {
        console.log('What');
    };

    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Discover, reserve and drive a car in no time, hassle-free!
                </h1>
                <p className="hero__subtitle">
                    Your car rental experience made effortless. Book with ease and hit the road.
                </p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-indigo-500 text-white rounded-full mt-10'
                    handleClick={handleClick}
                />

            </div>
        </div>
    )
};

export default Hero;
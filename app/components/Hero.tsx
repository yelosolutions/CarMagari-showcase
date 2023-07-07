"use client"
import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';



const Hero = () => {
    const handleScroll = () => {
        console.log('What');
    };

    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Discover, book or rent a car in no time, hassle-free!
                </h1>
                <p className="hero__subtitle">
                    Your car rental experience made effortless. Book with ease and hit the road.
                </p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-indigo-500 text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src={'/hero.png'}
                        alt='hero'
                        fill
                        className='object-contain'
                    />
                    <div className='hero__image-overlay'/>
                </div>
            </div>
        </div>
    )
};

export default Hero;
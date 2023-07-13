'use client'

import { Fragment } from 'react'
import { CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}


const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                as='div'
                className='relative z-10'
                onClose={closeModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black opacity-50'></div>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel 
                                className='car-details__dialog-panel'
                            >
                                <button
                                    type='button'
                                    className='car-details__close-btn'
                                    onClick={closeModal}
                                >
                                    <Image
                                        src='/close.svg'
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                        alt='close'
                                    />
                                </button>
                                <div className="flex-1 flex flex-col">
                                    <div className="car-details__main-image">
                                        <Image
                                            src='/hero.png'
                                            fill
                                            priority 
                                            className='object-contain'
                                            alt='details car'
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex-1 relative w-full h-24  rounded-lg">
                                            <Image
                                                src='/hero.png'
                                                fill
                                                priority 
                                                className='object-contain'
                                                alt='details car'
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 rounded-lg">
                                            <Image
                                                src='/hero.png'
                                                fill
                                                priority 
                                                className='object-contain'
                                                alt='details car'
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 rounded-lg">
                                            <Image
                                                src='/hero.png'
                                                fill
                                                priority 
                                                className='object-contain'
                                                alt='details car'
                                            />
                                        </div>
                                    </div>
                                    <Dialog.Title
                                        as='h2'
                                        className='text-xl font-semibold leading-6 text-gray-900 capitalize'
                                    >
                                        {car.make} {car.model}
                                    </Dialog.Title>
                                </div>
                                
                                <div className='flex-1 flex flex-col'>
                                    {Object.entries(car).map(([key, value]) => (
                                        <div className='flex text-right gap-5 justify-between' key={key}>
                                            <h4 className='text-grey capitalize'> {key.split('_').join(' ')} </h4>
                                            <p className='text-black-100 font-semibold'>{value}</p>
                                        </div>
                                    )
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

            </Dialog>
        </Transition>
    )
}

export default CarDetails
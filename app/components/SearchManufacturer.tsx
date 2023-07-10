'use client';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants';
import Image from 'next/image';


const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');


  const filteredManufacturers =
    query === ''? 
      manufacturers 
      : manufacturers.filter((item) => 
        item
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
      );
  
  return (
    <div className="search-manufacturer">
      {/* Combobox - autocomplete search*/}
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full '>
          {/* a Combobox button - click svg icon to display list*/}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              alt='make logo'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>

          {/* a Combobox input field - for searching*/}
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='VolksWagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* A transition - displays options*/}
        <Transition
          as={Fragment} //to avoid additional DOM nodes i.e <></>
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')} //reset search
        >
          <Combobox.Options
            className='search-manufacturer__options'
            static
          >
            {filteredManufacturers.length === 0 && query !== '' ? (
              <Combobox.Option
                value={query}
                className='search-manufacturer__option'
              >
                Create '{query}'
              </Combobox.Option>
            ) : (
              filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-indigo-400 text-white': 'text-gray-900'}`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${selected? 'font-medium': 'font-normal'}`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white': 'text-gray-900'}`}
                        ></span>)
                        : 
                        null}
                    </>
                  )}
                </Combobox.Option>
              ))
            ) }

          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
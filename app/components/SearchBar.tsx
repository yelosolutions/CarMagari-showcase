"use client";
import { useState} from 'react';
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSubmit = () => {};
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className="searchbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
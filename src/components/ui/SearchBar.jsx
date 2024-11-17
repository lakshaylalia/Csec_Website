
import React from 'react';

const SearchBar = ({ selectedName, handleNameChange }) => {
  return (
    <input 
      type='text' 
      placeholder='Search by Name' 
      value={selectedName} 
      onChange={handleNameChange} 
      className='lg:w-[300px] px-2 py-4 border rounded bg-[#444] text-white border-[#888] my-4'
    />
  );
};

export default SearchBar;

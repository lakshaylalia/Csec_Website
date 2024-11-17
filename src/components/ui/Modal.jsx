import React from 'react';

const Modal = ({ showModal, handleClose, handleBatchChange, selectedBatch, filterOptions }) => {
  if (!showModal) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-[#222] p-8 rounded-lg w-[300px] text-center'>
        <h2 className='text-white text-xl'>Filter Options</h2>
        <div className='mb-4'>
          <select 
            onChange={handleBatchChange} 
            value={selectedBatch} 
            className='w-full px-2 py-1 border rounded bg-[#333] text-white border-[#888]'
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </select>
        </div>
        <button 
          onClick={handleClose} 
          className='py-2 px-4 bg-[#000] text-white rounded'
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Modal;


"use client";
import React, { useState } from 'react';
import alumniData from '../../../alumni.json'; 
import Modal from '../../components/ui/modal'; 
import SearchBar from '../../components/ui/searchbar';
import { Inria_Serif } from "next/font/google";

const inria = Inria_Serif({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
});

const App = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [cardData, setCardData] = useState(alumniData);
  const [showModal, setShowModal] = useState(false);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  };

  const filterOptions = [
    { value: '', title: 'Select Batch' },
    { value: '2024', title: 'Batch 2024' },
    { value: '2023', title: 'Batch 2023' },
    { value: '2022', title: 'Batch 2022' },
    { value: '2021', title: 'Batch 2021' },
  ];

  const filteredCards = cardData.filter(card => {
    return (
      (!selectedBatch || card.batch.includes(selectedBatch)) &&
      (!selectedName || card.name.toLowerCase().startsWith(selectedName.toLowerCase()))
    );
  });

  const groupedCards = filteredCards.reduce((acc, card) => {
    if (!acc[card.batch]) {
      acc[card.batch] = [];
    }
    acc[card.batch].push(card);
    return acc;
  }, {});

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='relative flex flex-col items-center min-h-screen pt-16 bg-cover bg-center' style={{ backgroundImage: 'url(/images/our_alumini_bg.svg)' }}>
      <h1 className={`my-8 text-white text-5xl font-bold ${inria.className}`}>Our Alumni</h1>
      <div className='flex flex-col md:flex-row justify-between w-4/5 my-4'>
        <button 
          onClick={openModal} 
          className={`py-2 px-4 bg-[#333] text-white rounded mb-4 md:mb-0 font-bold ${inria.className}`}
        >
          Open Filter Options
        </button>
        <SearchBar selectedName={selectedName} handleNameChange={handleNameChange} />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-5  backdrop-blur-5xsm shadow-lg z-50 flex items-center justify-center">
          {/* <div className="bg-[#333] p-6 rounded-lg max-w-md w-full m-4"> */}
          <div className="bg-[#333] rounded-lg overflow-hidden">
            <Modal
              showModal={showModal}
              handleClose={closeModal}
              handleBatchChange={handleBatchChange}
              selectedBatch={selectedBatch}
              filterOptions={filterOptions}
            >
              <SearchBar selectedName={selectedName} handleNameChange={handleNameChange} />
            </Modal>
          </div>
        </div>
      )}
      
      <div className='flex flex-col items-center w-full'>
        {Object.keys(groupedCards).map(batch => (
          <div key={batch} className='w-full my-8'>
            <h2 className='text-white text-3xl mb-4 text-center'>{batch}</h2>
            <div className='flex flex-wrap justify-center p-4 mt-10'>
              {groupedCards[batch].map((card, index) => (
                <div key={index} className='w-60 h-80 rounded-lg flex flex-col items-center mx-5 mb-8 bg-white bg-opacity-10 backdrop-blur-md shadow-lg'>
                  <img src={card.imgSrc} alt={card.imgAlt} className='w-40 my-4 h-44 rounded-md object-cover mt-9' />
                  <div className='w-40'>
                    <div className='flex justify-between items-center w-full my-1'>
                      <h1 className={`text-xl text-white opacity-80 font-bold ${inria.className}`}>{card.name}</h1>
                      {card.instagram && (
                        <a href={card.instagram} target="_blank" rel="noopener noreferrer">
                          <img src="/Instagram.png" alt="Instagram" className='w-6 h-6 filter invert' />
                        </a>
                      )}
                    </div>
                    <div className='flex justify-between items-center w-full mb-'>
                      <p className={`text-xl text-white opacity-80 font-bold ${inria.className}`}>{card.batch}</p>
                      {card.linkedin && (
                        <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                          <img src="./Linkedin.png" alt="LinkedIn" className='w-6 h-6 filter invert' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
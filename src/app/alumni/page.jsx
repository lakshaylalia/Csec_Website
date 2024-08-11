
"use client"
import React, { useState } from 'react';
import alumniData from '../../../alumni.json'; 
import Modal from '../../components/ui/modal' 
import SearchBar from '../../components/ui/searchbar';

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
      (!selectedName || card.name.toLowerCase().includes(selectedName.toLowerCase()))
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
    <div className='flex flex-col items-center bg-[#000] min-h-screen pt-16 bg-cover bg-center' style={{ backgroundImage: 'url(/images/our_alumini_bg.svg)' }}>
      <h1 className='my-8 text-white text-4xl'>Our Alumni</h1>
      <div className='flex justify-between w-4/5 my-4'>
        <button 
          onClick={openModal} 
          className='py-2 px-4 bg-[#333] text-white rounded'
        >
          Open Filter Options
        </button>
        <SearchBar selectedName={selectedName} handleNameChange={handleNameChange} />
      </div>
      <Modal
        showModal={showModal}
        handleClose={closeModal}
        handleBatchChange={handleBatchChange}
        selectedBatch={selectedBatch}
        filterOptions={filterOptions}
      />
      <div className='flex flex-col items-center w-full'>
        {Object.keys(groupedCards).map(batch => (
          <div key={batch} className='w-full my-8'>
            <h2 className='text-white text-3xl mb-4 text-center'>{batch}</h2>
            <div className='flex flex-wrap justify-center p-4'>
              {groupedCards[batch].map((card, index) => (
                <div key={index} className='w-64 rounded-lg flex flex-col items-center mx-6 mb-8 bg-[#010203] text-center border-2 custom-border-gradient'>
                  <img src={card.imgSrc} alt={card.imgAlt} className='w-full h-64 object-cover' />
                  <h1 className='my-2 text-xl text-white'>{card.name}</h1>
                  <div className='flex justify-center gap-4 mt-2 mb-4'>
                    {card.linkedin && (
                      <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className='w-6 h-6' />
                      </a>
                    )}
                    {card.instagram && (
                      <a href={card.instagram} target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className='w-6 h-6' />
                      </a>
                    )}
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

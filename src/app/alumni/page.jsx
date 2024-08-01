"use client"
import React, { useState } from 'react';
import alumniData from '../../../alumni.json';  // Import your JSON data here

const Modal = ({ showModal, handleClose, handleBatchChange, selectedBatch, filterOptions }) => {
  if (!showModal) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#222', padding: '2rem', borderRadius: '8px', width: '300px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff' }}>Filter Options</h2>
        <div style={{ marginBottom: '1rem' }}>
          <select onChange={handleBatchChange} value={selectedBatch} className='lg:w-[230px] px-2 py-1 border rounded' style={{ backgroundColor: '#333', color: '#fff', borderColor: '#888' }}>
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </select>
        </div>
        <button onClick={handleClose} style={{ padding: '0.5rem 1rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Select</button>
      </div>
    </div>
  );
};

const SearchBar = ({ selectedName, handleNameChange }) => {
  return (
    <input 
      type='text' 
      placeholder='Search by Name' 
      value={selectedName} 
      onChange={handleNameChange} 
      className='lg:w-[230px] px-2 py-1 border rounded' 
      style={{ backgroundColor: '#444', color: '#fff', borderColor: '#888', width: '300px', margin: '1rem 0' }} 
    />
  );
};

const App = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [cardData, setCardData] = useState(alumniData);  // Use the imported JSON data directly
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
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#000000', 
      minHeight: '100vh', 
      paddingTop: '60px',
      backgroundImage: 'url(/images/our_alumini_bg.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1 style={{ margin: '2rem 0', color: '#ffffff', fontSize: '3rem' }}>Our Alumni</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '1rem 0' }}>
        <button onClick={openModal} style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {Object.keys(groupedCards).map(batch => (
          <div key={batch} style={{ width: '100%', margin: '2rem 0' }}>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>{batch}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
              {groupedCards[batch].map((card, index) => (
                <div key={index} style={{
                  width: '16rem', 
                  borderRadius: '1rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  margin: '2.5rem', 
                  marginBottom: '3rem',
                  backgroundColor: '#010203', 
                  textAlign: 'center',
                  border: '2px solid',
                  borderImage: 'linear-gradient(to right, #ff00ff, #00ffff, #00ff00) 1',
                  borderWidth: '2px'
                }}>
                  <img src={card.imgSrc} alt={card.imgAlt} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <h1 style={{ margin: '0.5rem 0', fontSize: '1.5rem', color: 'white' }}>{card.name}</h1>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    {card.linkedin && (
                      <a href={card.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} /></a>
                    )}
                    {card.instagram && (
                      <a href={card.instagram} target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: '24px', height: '24px' }} /></a>
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
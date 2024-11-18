"use client"; 

import React, { useState } from "react";
import alumniData from "../../../alumni.json";
import Modal from '../../components/ui/Modal'
import SearchBar from "../../components/ui/SearchBar";
import { Inria_Serif } from "next/font/google";

const inria = Inria_Serif({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const AlumniPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [cardData, setCardData] = useState(alumniData);
  const [showModal, setShowModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  };

  const filterOptions = [
    { value: "", title: "Select Batch" },
    { value: "2021", title: "Batch 2021" },
    { value: "2022", title: "Batch 2022" },
    { value: "2023", title: "Batch 2023" },
    { value: "2024", title: "Batch 2024" },
  ];

  const filteredCards = cardData.filter((card) => {
    return (
      (!selectedBatch || card.batch.includes(selectedBatch)) &&
      (!selectedName ||
        card.name.toLowerCase().startsWith(selectedName.toLowerCase()))
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
    <div
      className="relative flex flex-col items-center min-h-screen pt-16 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/our_alumini_bg.svg)" }}
    >
      <h1 className={`my-8 text-white text-5xl font-bold ${inria.className}`}>
        Meet Our Team
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-4/5 my-2">
        <button
          onClick={openModal}
          className={`py-2 px-4 bg-[#333] text-white rounded mb-2 md:mb-0 font-bold transition-transform transform hover:scale-110 ${inria.className}`}
        >
          Open Filter Options
        </button>
        <SearchBar
          selectedName={selectedName}
          handleNameChange={handleNameChange}
        />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-5 backdrop-blur-4sm shadow-lg z-50 flex items-center justify-center">
          <div className="bg-[#333] rounded-lg overflow-hidden">
            <Modal
              showModal={showModal}
              handleClose={closeModal}
              handleBatchChange={handleBatchChange}
              selectedBatch={selectedBatch}
              filterOptions={filterOptions}
            >
              <SearchBar
                selectedName={selectedName}
                handleNameChange={handleNameChange}
              />
            </Modal>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full ">
        {Object.keys(groupedCards)
          
          .map((batch) => (
            <div key={batch} className="w-full my-8 ">
              <h2 className="text-white text-3xl mb-4 text-center">{batch}</h2>
              <div className="flex flex-wrap justify-center p-4 mt-10">
                {groupedCards[batch].map((card, index) => (
                  <div
                    key={index}
                    className="relative w-80 h-[20rem] rounded-lg flex flex-col items-center mx-5 mb-8 bg-white bg-opacity-10 backdrop-blur-md shadow-lg overflow-hidden"
                    onMouseEnter={() => setHoveredCard(index)} 
                    onMouseLeave={() => setHoveredCard(null)} 
                  >
                    
                    <div className="relative w-full h-48">
                      <img
                        src={card.imgSrc}
                        alt={card.imgAlt}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      {/* Show quote on hover */}
                      {hoveredCard === index && (
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white p-2 z-10 ">
                          <p 
                          className={'text-center text-md font-bold opacity-80  ${inria.className} '} 
                          >
                            {card.quote}
                            </p>
                        </div>
                      )}
                    </div>

                    <h1
                      className={`text-xl text-center text-white font-bold mt-6 ${inria.className} max-h-10 overflow-hidden text-ellipsis`}
                    >
                      {card.name}
                    </h1>

                    <div className="flex justify-center items-center mt-4 mb-6 space-x-4">
                      {card.instagram && (
                        <a
                          href={card.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform transform hover:scale-125"
                        >
                          <img
                            src="/Instagram.png"
                            alt="Instagram"
                            className="w-6 h-6 filter invert"
                          />
                        </a>
                      )}
                      {card.linkedin && (
                        <a
                          href={card.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform transform hover:scale-125"
                        >
                          <img
                            src="/Linkedin.png"
                            alt="LinkedIn"
                            className="w-6 h-6 filter invert"
                          />
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

export default AlumniPage;

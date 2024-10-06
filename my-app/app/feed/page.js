// app/feed/page.js
"use client"; // This tells Next.js this is a Client Component

import React, { useState } from 'react';
import './globals.css'; // Import the global CSS file

const FeedPage = () => {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Array of boxes data (you can add more boxes here)
  const boxes = [
    {
      title: 'Floc Website',
      description: 'blah blah blah',
      imgSrc: '/image1.png',
    },
    {
      title: 'STEM Project 1',
      description: 'This is a description for project 1.',
      imgSrc: '/image1.png',
    }
  ];

  // Filter boxes based on the search query
  const filteredBoxes = boxes.filter(box =>
    box.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="white-section">
        <img src="/bird.png" alt="Description" className="left-image" />
      </div>
      <div className="blue-section">
        <h1 className="title">STEM Projects</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="search-bar"
        />

        {/* Display filtered boxes */}
        {filteredBoxes.length > 0 ? (
          filteredBoxes.map((box, index) => (
            <div key={index} className="white-box">
              <img src={box.imgSrc} alt={box.title} className="box-image" />
              <h2 className="box-title">{box.title}</h2>
              <p className="box-description">{box.description}</p>
            </div>
          ))
        ) : (
          <p>No projects found</p> // Display this if no boxes match the search query
        )}
      </div>
    </div>
  );
};

export default FeedPage;

import React, { useState } from 'react';
import './destWeLove.css';

const DestWeLove = () => {
  const [activeTab, setActiveTab] = useState('1');

  const regions = [
    { name: 'Texel', properties: 410 },
    { name: 'Bihar', properties: 762 },
    { name: 'Isle of Wight', properties: 936 },
    { name: 'Jersey', properties: 89 },
    { name: 'Ras Al Khaimah', properties: 116 },
    { name: 'Hawaii', properties: 250 },
    { name: 'Ibiza', properties: 500 },
    { name: 'Bali', properties: 350 },
    { name: 'Cornwall', properties: 450 },
    { name: 'Guernsey', properties: 100 },
    { name: 'Tenerife', properties: 550 },
    { name: 'Uttar Pradesh', properties: 400 },
    { name: 'Lake District', properties: 2397 },
    { name: 'Santorini', properties: 1768 },
    { name: 'Phuket Province', properties: 400 },
    { name: 'Bora Bora', properties: 59 },
    { name: 'Zanzibar', properties: 836 },
    { name: 'England', properties: 59 },
    { name: 'Mykonos', properties: 59 },
  ];

  const cities = [
    { name: 'Singapore, Singapore', properties: '73 vacation rentals, 4 beach rentals, 4 glamping sites' },
    { name: 'Bangkok, ThailandCity 2', properties: '692 vacation rentals, 124 cottages' },
    { name: 'Hong Kong, Hong Kong', properties: '213 vacation rentals, 8 beach rentals, 7 cottages' },
    { name: 'Kuala Lumpur, Malaysia', properties: '2,306 vacation rentals, 86 cottages, 3 cabins' },
    { name: 'Hanoi, Vietnam', properties: '1,063 vacation rentals, 85 cottages, 61 beach rentals, 4 cabins' },
    { name: 'Nha Trang, Vietnam', properties: '226 vacation rentals, 216 beach rentals, 49 cottages' },
    { name: 'Newcastle upon Tyne', properties: '389 hotels' },
    { name: 'London', properties: '14504 hotels' },
    { name: 'Liverpool', properties: '1079 hotels' },
    { name: 'Leeds', properties: '382 hotels' },
    { name: 'Glasgow', properties: '915 hotels' },
    { name: 'Edinburgh', properties: 'Edinburgh' },
  ];

  const placesOfInterest = [
    { name: 'The Shard', properties: 410 },
    { name: 'O2 Arena', properties: 300 },
    { name: 'Disneyland Paris', properties: 200 },
    { name: 'Times Square', properties: 150 },
    { name: 'State Park', properties: 600 },
    { name: 'River Walk', properties: 250 },
    { name: 'Wembley Stadium', properties: 500 },
    { name: 'Eiffel Tower', properties: 350 },
    { name: 'Al Maha Wildlife Reverse', properties: 450 },
    { name: 'Ocean City Boardwalk', properties: 100 },
    { name: 'Kalahari Waterpark', properties: 550 },
    { name: 'Heathrow Terminal 2', properties: 374 },
    { name: 'Disneyland', properties: 96 },
    { name: 'Comal River Tubing', properties: 400 },
    { name: 'Universal Studios Orlando', properties: 75 },
    { name: 'Portmerion', properties: 400 },
    { name: 'Niagara Falls State Park', properties: 327 },
    { name: 'Guadalupe River Tubing', properties: 400 },
    { name: 'Burj Al Arab Tower', properties: 4277 },
  ];

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div className="grid-item" key={index}>
        <a href="#/" className="ia_link">{item.name}</a>
        <span className="ia_hotelnum">{item.properties} properties</span>
      </div>
    )); 
  };


  return (
    <div className="">
      <div className="discounts">
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.117.2/illustrations-traveller/GlobeGeniusBadge.png" alt="" className="imgDisc" />
        <div>
          <h1 className="discTitle">Get instant discounts</h1>
          <span className="discP">Just sign into your NTBooking.com account and look for the blue Genius logo to save</span>
          <div>
            <button className="btnDisc1">Sign in</button>
            <button className="btnDisc2">Register</button>
          </div>
        </div>
      </div>
      {/* --------------------------------------- */}
      <div className="destWeLove">
        <button
          className={`destBtn1 ${activeTab === '1' ? 'active' : ''}`}
          onClick={() => setActiveTab('1')}
        >
          Regions
        </button>
        <button
          className={`destBtn2 ${activeTab === '2' ? 'active' : ''}`}
          onClick={() => setActiveTab('2')}
        >
          Cities
        </button>
        <button
          className={`destBtn2 ${activeTab === '3' ? 'active' : ''}`}
          onClick={() => setActiveTab('3')}
        >
          Places of interest
        </button>
        <div className={`content ${activeTab === '1' ? 'active' : ''}`} id="1">
          <div className="grid-container">
            {renderItems(regions)}
          </div>
        </div>
        <div className={`content ${activeTab === '2' ? 'active' : ''}`} id="2">
          <div className="grid-container">
            {renderItems(cities)}
          </div>
        </div>
        <div className={`content ${activeTab === '3' ? 'active' : ''}`} id="3">
          <div className="grid-container">
            {renderItems(placesOfInterest)}
          </div>
        </div>
      </div>
      {/* ---------------- */}
    </div>
  );
};

export default DestWeLove;

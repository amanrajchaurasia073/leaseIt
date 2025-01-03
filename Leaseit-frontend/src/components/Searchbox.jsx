// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SearchBox = () => {
  // Mock data from the database
  const database = {
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    areas: ["Downtown", "Uptown", "Midtown", "Suburbs", "City Center"],
  };

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [rentalType, setRentalType] = useState("");

  const handleSearch = () => {
    if (!city || !area || !rentalType) {
      alert("Please select all fields!");
      return;
    }
    alert(`Searching for ${rentalType} in ${area}, ${city}`);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white px-6 py-4 rounded-2xl m-7 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          {/* City Dropdown */}
          <div className=" flex items-center mx-5">
            <label className="block text-l text-gray-800 mb-1">City:</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-60 px-3 py-2  text-gray-600 text-sm mx-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              {database.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Area Dropdown */}
          <div className=" flex items-center mx-5">
            <label className="block text-l text-gray-800 mb-1">Area:</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-60 px-3 py-2  text-gray-600 text-sm mx-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Area</option>
              {database.areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Rental Type Dropdown */}
          <div className=" flex items-center mx-5">
            <label className="block text-l text-gray-800 mb-1">Rental Type: </label>
            <select
              value={rentalType}
              onChange={(e) => setRentalType(e.target.value)}
              className="w-60 px-3 py-2 text-gray-600 text-sm mx-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Rooms">Rooms</option>
              <option value="PGs">PGs</option>
              <option value="Homes">Homes</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-teal-custom text-white w-60 px-4 py-2 mt-5 items-center mx-96 rounded-xl hover:bg-teal-600 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

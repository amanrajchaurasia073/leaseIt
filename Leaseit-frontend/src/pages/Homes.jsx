/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Homes = () => {
  const [HomeData, setHomeData] = useState([]);
  const [filters, setFilters] = useState({
    HomeConfiguration: "",
    city: "",
    area: "",
    priceRange: ""
  });

  const [filteredData, setFilteredData] = useState([]);

  // Simulated API data
  useEffect(() => {
    // Replace this with an API call if needed
    const fetchData = async () => {
      const data = await fetch("src/data.json");
      const result = await data.json();
      setHomeData(result);
      setFilteredData(result);
    };
    fetchData();
  }, []);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Apply filters
  useEffect(() => {
    const filtered = HomeData.filter((home) => {
      return (
        home.type === "home" && // Ensure only home cards are displayed based on "type"
        (!filters.HomeConfiguration || home.HomeConfiguration === filters.HomeConfiguration) &&
        (!filters.city || home.city === filters.city) &&
        (!filters.area || home.area === filters.area) &&
        (!filters.priceRange ||
          home.price >= parseInt(filters.priceRange.split("-")[0]) &&
          home.price <= parseInt(filters.priceRange.split("-")[1]))
      );
    });
    setFilteredData(filtered);
  }, [filters, HomeData]);

  return (
    <div className="p-6">
      <div className="text-teal-custom rounded-lg shadow-md p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">Filter Homes</h2>
        <div className="flex flex-wrap gap-4">
          {/* Home Configuration Filter */}
          <select
            value={filters.HomeConfiguration}
            onChange={(e) => handleFilterChange("HomeConfiguration", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Home Configuration</option>
            <option value="1">1BHK</option>
            <option value="2">2BHK</option>
            <option value="3">3BHK</option>
            <option value="4">4BHK</option>
          </select>

          {/* City Filter */}
          <select
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select City</option>
            {[...new Set(HomeData.map((Home) => Home.city))].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Area Filter */}
          <select
            value={filters.area}
            onChange={(e) => handleFilterChange("area", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Area</option>
            {[...new Set(HomeData.map((Home) => Home.area))].map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          {/* Price Range Filter */}
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Price Range</option>
            <option value="0-5000">0 - 5000</option>
            <option value="5001-10000">5001 - 10000</option>
            <option value="10001-15000">10001 - 15000</option>
          </select>
        </div>
      </div>

      {/* Display Results */}
      <div className="mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((home) => (
            <div key={home.id} className="bg-gray-100 p-4 rounded mb-4">
              <h3 className="font-bold text-lg">{home.name}</h3>
              <p>City: {home.city}</p>
              <p>Area: {home.area}</p>
              <p>Price: ₹{home.price}</p>
              <p>Type: {home.pgType}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homes;

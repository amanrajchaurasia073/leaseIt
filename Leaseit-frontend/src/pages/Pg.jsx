// eslint-disable-next-line no-unused-vars
import React from 'react'
import  { useState, useEffect } from "react";

const Pg = () => {
  const [pgData, setPgData] = useState([]);
  const [filters, setFilters] = useState({
    sharingType: "",
    city: "",
    area: "",
    priceRange: "",
    pgType: "",
  });

  const [filteredData, setFilteredData] = useState([]);

  // Simulated API data
  useEffect(() => {
    // Replace this with an API call if needed
    const fetchData = async () => {
      const data = await fetch("/path-to-your-api-or-json");
      const result = await data.json();
      setPgData(result);
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
    const filtered = pgData.filter((pg) => {
      return (
        (!filters.sharingType || pg.sharingType === filters.sharingType) &&
        (!filters.city || pg.city === filters.city) &&
        (!filters.area || pg.area === filters.area) &&
        (!filters.priceRange ||
          pg.price >= parseInt(filters.priceRange.split("-")[0]) &&
          pg.price <= parseInt(filters.priceRange.split("-")[1])) &&
        (!filters.pgType || pg.pgType === filters.pgType)
      );
    });
    setFilteredData(filtered);
  }, [filters, pgData]);

  return (
    <div className="p-6">
      <div className="bg-teal-55 rounded-lg shadow-md p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Filter PGs</h2>
        <div className="flex flex-wrap gap-4">
          {/* Sharing Type Filter */}
          <select
            value={filters.sharingType}
            onChange={(e) => handleFilterChange("sharingType", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Sharing Type</option>
            <option value="Single">Single Sharing</option>
            <option value="2">2 Sharing</option>
            <option value="3">3 Sharing</option>
            <option value="4">4 Sharing</option>
          </select>

          {/* City Filter */}
          <select
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select City</option>
            {[...new Set(pgData.map((pg) => pg.city))].map((city) => (
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
            {[...new Set(pgData.map((pg) => pg.area))].map((area) => (
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

          {/* PG Type Filter */}
          <select
            value={filters.pgType}
            onChange={(e) => handleFilterChange("pgType", e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select PG Type</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
            <option value="Co-ed">Co-ed</option>
          </select>
        </div>
      </div>

      {/* Display Results */}
      <div className="mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((pg) => (
            <div key={pg.id} className="bg-gray-100 p-4 rounded mb-4">
              <h3 className="font-bold text-lg">{pg.name}</h3>
              <p>City: {pg.city}</p>
              <p>Area: {pg.area}</p>
              <p>Price: ₹{pg.price}</p>
              <p>Type: {pg.pgType}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};


export default Pg
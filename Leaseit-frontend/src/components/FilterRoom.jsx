// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import data from "../Data.json"; // Import the JSON data
import DefaultRoomView from './DefaultRoomView';

function FilterRoom() {
    const [filters, setFilters] = useState({
        city: "",
        area: "",
        minPrice: "",
        maxPrice: "",
      });
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
      };
    
      const applyFilters = () => {
        return data.filter((item) => {
          return (
            (filters.city === "" || item.location.includes(filters.city)) &&
            (filters.area === "" || item.area === filters.area) &&
            (filters.minPrice === "" || item.monthlyRent >= parseFloat(filters.minPrice)) &&
            (filters.maxPrice === "" || item.monthlyRent <= parseFloat(filters.maxPrice))
          );
        });
      };
    
      const filteredData = applyFilters();
    
      // Check if any filter is selected
      const isAnyFilterSelected = Object.values(filters).some((value) => value !== "");
    
      return (
        <div className="p-6 bg-gray-100 min-h-screen">
          {/* Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-600">Filters</h2>
            <div className="grid grid-cols-1 text-teal-custom md:grid-cols-2 lg:grid-cols-4 gap-4">
    
              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium  text-teal-custom">City</label>
                <select
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  {/* Add other cities */}
                </select>
              </div>
    
              {/* Area Filter */}
              <div>
                <label className="block text-sm font-medium  text-teal-custom">Area</label>
                <select
                  name="area"
                  value={filters.area}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  <option value="Main Street">Main Street</option>
                  <option value="Park Avenue">Park Avenue</option>
                  {/* Add other areas */}
                </select>
              </div>
    
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium  text-teal-custom">Min Price</label>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Min Price"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  text-teal-custom">Max Price</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Max Price"
                />
              </div>
            </div>
          </div>
    
          {/* Results Section */}
          {isAnyFilterSelected ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.address}, {item.location}</p>
                    <p className="text-gray-600 mb-2">Rent: ₹{item.monthlyRent}</p>
                    <p className="text-gray-600">Availability: {item.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <DefaultRoomView data={data} />
          )}
        </div>
      );
}

export default FilterRoom
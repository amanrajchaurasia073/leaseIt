// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);

  // Fetch data from JSON API
  useEffect(() => {
    fetch("src/data.json") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" min-h-screen flex flex-wrap gap-6 justify-center p-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="w-80 h-96 bg-gray-300 shadow-md rounded-lg overflow-hidden"
        >
          {/* Image */}
          <img
            src={property.imageUrl}
            alt={property.name}
            className="h-48 w-full object-cover"
          />

          {/* Details */}
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-xl font-bold text-teal-700">
              {property.name}
            </h2>
            <p className="text-gray-600">
              <strong>Rent:</strong> ₹{property.monthlyRent}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {property.address}
            </p>
            {/* Location as a clickable link */}
            <p className="text-gray-600">
              <strong>Location:</strong>{" "}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  property.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {property.location}
              </a>
            </p>
            <p
              className={`font-medium ${
                property.availability === "Available"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <strong>Availability:</strong> {property.availability}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;

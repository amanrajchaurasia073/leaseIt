// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom"; // Import useNavigate

function DefaultHomeView({ data }) {
  const navigate = useNavigate();

  // Filter only Home cards
  const homeData = data.filter((item) => item.type.toLowerCase() === "home");

  // Handle card click
  const handleCardClick = (id) => {
    navigate(`/home/${id}`); // Navigate to the details page with the card ID
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-36 mr-36">
      {homeData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-2xl  transition-shadow"
          onClick={() => handleCardClick(item.id)} // Navigate on click
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-teal-800">{item.name}</h3>
            <p className="text-gray-600 mb-2">
              <strong>Rent:</strong> ₹{item.monthlyRent}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {item.address}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong>{" "}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  item.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.location}
              </a>
            </p>
            <p
              className={`font-medium ${
                item.availability === "Available"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <strong>Availability:</strong> {item.availability}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Add prop-type validation
DefaultHomeView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyRent: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      availability: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      pgType: PropTypes.string,
      sharingType: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DefaultHomeView;
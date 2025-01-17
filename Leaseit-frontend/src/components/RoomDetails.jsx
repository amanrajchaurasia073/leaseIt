// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

function RoomDetails({ data }) {
    const { id } = useParams(); // Get the card ID from the URL
    const navigate = useNavigate();
  
    // Find the room details based on the ID
    const room = data.find((item) => item.id === parseInt(id));
  
    if (!room) {
      return <div className="p-8">Room not found.</div>;
    }
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Rooms
        </button>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-4 text-teal-800">{room.name}</h2>
          <p className="text-gray-600 mb-2">
            <strong>Rent:</strong> ₹{room.monthlyRent}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> {room.address}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Location:</strong>{" "}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                room.location
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {room.location}
            </a>
          </p>
          <p
            className={`font-medium ${
              room.availability === "Available" ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong>Availability:</strong> {room.availability}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Sharing Type:</strong> {room.sharingType}
          </p>
          <p className="text-gray-600">
            <strong>Area:</strong> {room.area}
          </p>
        </div>
      </div>
    );
  };
  
  // Add prop-type validation
  RoomDetails.propTypes = {
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
        sharingType: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
      })
    ).isRequired,
}

export default RoomDetails
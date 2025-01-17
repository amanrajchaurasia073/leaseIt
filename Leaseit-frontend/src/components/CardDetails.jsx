// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data.json"; // Import the JSON data


function CardDetails() {
    const { id } = useParams(); // Get the card ID from the URL
    const navigate = useNavigate();
  
    // Find the card details based on the ID
    const card = data.find((item) => item.id === parseInt(id));
  
    if (!card) {
      return <div className="p-8">Card not found.</div>;
    }
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>

        <div className="bg-white p-6 rounded-lg shadow-md flex ">
          <div>
          <img
            src={card.imageUrl}
            alt={card.name}
            className="max-w-5xl h-full object-cover mb-4"
          />
          </div>
          <div className="ml-96 pl-28">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">{card.name}</h2>
          <p className="text-gray-600 mb-2">
            <strong>Monthly Rent:</strong> ₹{card.monthlyRent}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Deposit Amount:</strong> ₹{card.depositAmount}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Refund Amount:</strong> ₹{card.refundAmount}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Home Size:</strong> {card.homeSize}sq ft
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Home Configuration:</strong> {card.homeConfiguration}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Furnishing Status:</strong> {card.furnishingStutas}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Other facilities:</strong> {card.otherFacilities}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>City:</strong> {card.city}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> {card.address}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Location:</strong>{" "}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                card.location
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {card.location}
            </a>
          </p>
          <h3>About Owner</h3>
          <p className="text-gray-600 mb-2">
            <strong>Owner Name:</strong> {card.fullName}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {card.emailId}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Contact Number:</strong> {card.contactNumber}
          </p>
          <p
            className={`font-medium ${
              card.availability === "Available" ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong>Availability:</strong> {card.availability}
          </p>
          </div>
          
        </div>
      </div>
    );
}

export default CardDetails
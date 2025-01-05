// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [user, setUser] = useState(null); // State for logged-in user
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoginOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false); // Close the login modal
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    const mockUser = { name: "John Doe", email: "john.doe@example.com" };
    setUser(mockUser); // Set user state
    closeLoginModal();
    alert("Logged in successfully!");
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    alert("Logged out successfully!");
  };

  return (
    <>
      <nav className="bg-teal-opacity shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="./src/assets/leaseitLogo.jpg" // Replace with your logo path
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <Link to="/" className="text-2xl text-teal-custom font-yeon-sung font-bold hover:text-teal-custom">
              Lease<span className="text-golden-yellow">ii</span>t
            </Link>
          </div>

          {/* Links */}
          <div className="space-x-10 font-wave">
            <Link
              to="/pg"
              className="relative text-gray-700 text-lg font-medium hover:text-gray-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full"
            >
              PG
            </Link>
            <Link
              to="/rooms"
              className="relative text-gray-700 text-lg font-medium hover:text-gray-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full"
            >
              Rooms
            </Link>
            <Link
              to="/homes"
              className="relative text-gray-700 text-lg font-medium hover:text-gray-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full"
            >
              Homes
            </Link>
          </div>

          {/* User Actions */}
          <div className="space-x-4 text-gray-700 flex items-center">
            {user ? (
              <>
                <div className="bg-blue-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
                  {user.name[0].toUpperCase()}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-golden-yellow hover:bg-yellow-500 px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                Login
              </button>
            )}
            <button
              onClick={() => navigate("/register")}
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-900 text-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Register = () => {
  const [userType, setUserType] = useState('');
    const [propertyType, setPropertyType] = useState('');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
            <h2 className="text-2xl font-bold mb-4 text-teal-800">Registration Form</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your full name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email ID</label>
                    <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your password" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">User Type</label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={e => setUserType(e.target.value)}>
                        <option value="">Select user type</option>
                        <option value="seeker">Property Seeker</option>
                        <option value="owner">Property Owner</option>
                    </select>
                </div>

                {userType === 'owner' && (
                    <div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Property Name</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter property name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
                            <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter monthly rent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deposit Amount</label>
                            <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter deposit amount" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Refund Amount</label>
                            <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter refund amount" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter city" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter address"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter contact number" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter owner name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Property Type</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={e => setPropertyType(e.target.value)}>
                                <option value="">Select property type</option>
                                <option value="room">Room</option>
                                <option value="pg">PG</option>
                                <option value="home">Home</option>
                            </select>
                        </div>

                        {propertyType === 'pg' && (
                            <div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">PG Type</label>
                                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select PG type</option>
                                        <option value="ladies">Ladies PG</option>
                                        <option value="men">Mens PG</option>
                                        <option value="coliving">Coliving</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Occupancy Type</label>
                                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select occupancy type</option>
                                        <option value="single">Single Sharing</option>
                                        <option value="2">2 Sharing</option>
                                        <option value="3">3 Sharing</option>
                                        <option value="4">4 Sharing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Facilities Included in Rent</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="List facilities included"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Facilities Provided in PG</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="List facilities provided"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">PG Images</label>
                                    <input type="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" multiple />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Location of PG</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter location" />
                                </div>
                            </div>
                        )}

                        {propertyType === 'room' && (
                            <div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Room Size (sq ft)</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter room size" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Facilities Provided</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="List facilities provided"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Rules and Regulations</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter rules and regulations"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Room Images</label>
                                    <input type="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" multiple />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Location of Room</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter location" />
                                </div>
                            </div>
                        )}

                        {propertyType === 'home' && (
                            <div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Configuration</label>
                                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select configuration</option>
                                        <option value="1BHK">1BHK</option>
                                        <option value="2BHK">2BHK</option>
                                        <option value="3BHK">3BHK</option>
                                        <option value="4BHK">4BHK</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Furnishing Status</label>
                                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select furnishing status</option>
                                        <option value="fully">Fully Furnished</option>
                                        <option value="semi">Semi Furnished</option>
                                        <option value="unfurnished">Unfurnished</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Home Size (sq ft)</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter home size" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Other Facilities</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="List other facilities"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Home Images</label>
                                    <input type="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" multiple />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Location of Home</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter location" />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register

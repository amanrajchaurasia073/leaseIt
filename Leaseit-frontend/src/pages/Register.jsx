// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    propertyName: "",
    mountlyRent: "",
    depositAmount: "",
    refundAmount: "",
    city:"",
    address: "",
    contactNumber: "",
    propertyType: "",
    pgType:"",
    occupancy:"",
    facilitiesIncludedRent:"",
    pgImages:null,
    pgLocation:"",
    roomSize:"",
    facilitiesprovided:"",
    rulesRegulations:"",
    roomImages:"",
    roomLocatiom:"",
    HomeSize:"",
    configuration:"",
    firnishingstatus:"",
    otherfacilities:"",
    homeImage:null,
    homeLocation:"",
    });

  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map(file => URL.createObjectURL(file)));
  };


  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.userType) newErrors.userType = "User type is required.";
    if (formData.userType === "owner" && !formData.propertyName) {
      newErrors.propertyName = "Property name is required.";
    }
    if (formData.userType === "owner" && !formData.mountlyRent) {
      newErrors.mountlyRent = "Monthly rent is required.";
    }
    if (formData.userType === "owner" && !formData.depositAmount) {
      newErrors.depositAmount = "Deposit amount is required.";
    }
    if (formData.userType === "owner" && !formData.refundAmount) {
      newErrors.refundAmount = "Refund amount is required.";
    }
    if (formData.userType === "owner" && !formData.city) {
      newErrors.city = "City is required.";
    }
    if (formData.userType === "owner" &&!formData.address) {
      newErrors.address = "Address is required.";
    }
    if (formData.userType === "owner" && !formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits.";
    }
    if (!formData.propertyType) newErrors.propertyType = "property type is required.";
    if (formData.propertyType === "PG" && !formData.pgType) {
      newErrors.pgType = " selecting PG type is required.";
    }
    if (formData.propertyType === "PG" &&!formData.occupancy) {
      newErrors.occupancy = "occupancy is required.";
    }
    if (formData.propertyType === "PG" &&!formData.facilitiesIncludedRent) {
      newErrors.facilitiesIncludedRent = "facilities included rent is required.";
    }
    if (formData.propertyType === "PG" &&!formData.pgImages) {
      newErrors.pgImages = "Images are  required.";
    }
    if (formData.propertyType === "PG" &&!formData.pgLocation) {
      newErrors.pgLocation = "location is required.";
    }else if (!/^https:\/\/.*/.test(formData.pgLocation)) {
      newErrors.pgLocation = "You entered wrong location.";
    }
    if (formData.propertyType === "Room" && !formData.roomSize) {
      newErrors.roomSize = " size of the home is required in squear feet.";
    }
    if (formData.propertyType === "Room" &&!formData.facilitiesprovided) {
      newErrors.facilitiesProvided = "Facilities provided is required.";
    }
    if (formData.propertyType === "Room" &&!formData.rulesRegulations) {
      newErrors.rulesRegulations = "Rules and regulations is required.";
    }
    if (formData.propertyType === "Room" &&!formData.roomImages) {
      newErrors.roomImages = "Images are  required.";
    }
    if (formData.propertyType === "Room" &&!formData.roomLocatiom) {
      newErrors.roomLocatiom = "location is required.";
    }else if (!/^https:\/\/.*/.test(formData.roomLocatiom)) {
      newErrors.roomLocatiom = "You entered wrong location.";
    }
    if (formData.propertyType === "Home" &&!formData.HomeSize) {
      newErrors.HomeSize = "size of the home is required in squear feet.";
    }
    if (formData.propertyType === "Home" &&!formData.configuration) {
      newErrors.configuration = "configuration of the home is required.";
    }
    if (formData.propertyType === "Home" &&!formData.firnishingstatus) {
      newErrors.firnishingstatus = "furnishing status of the home is required.";
    }
    if (formData.propertyType === "Home" &&!formData.otherfacilities) {
      newErrors.otherfacilities = "other facilities is required.";
    }
    if (formData.propertyType === "Home" &&!formData.homeImage) {
      newErrors.homeImage = "Image is required.";
    }
    if (formData.propertyType === "Home" &&!formData.homeLocation) {
      newErrors.homeLocation = "location is required.";
    } else if (!/^https:\/\/.*/.test(formData.homeLocation)) {
      newErrors.homeLocation = "You entered wrong location.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Form submitted", formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "",
        propertyName: "",
        mountlyRent: "",
        depositAmount: "",
        refundAmount: "",
        city:"",
        address: "",
        contactNumber: "",
        propertyType: "",
        pgType:"",
        occupancy:"",
        facilitiesIncludedRent:"",
        pgImages: null,
        pgLocation:"",
        roomSize:"",
        facilitiesProvided:"",
        rulesRegulations:"",
        roomImages:null,
        roomLocatiom:"",
        HomeSize:"",
        configuration:"",
        firnishingstatus:"",
        otherfacilities:"",
        homeImage:null,
        homeLocation:"",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-5 text-center">
        <h2 className="text-2xl font-bold mb-4 text-teal-800">You submitted successfully</h2>
        <a href="/" className="text-blue-500 underline">Go to Home Page</a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-bold mb-4 text-teal-800">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type of User</label>
          <select
            name="userType"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="">Select user type</option>
            <option value="seeker">Property Seeker</option>
            <option value="owner">Property Owner</option>
          </select>
          {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
        </div>
        {formData.userType === "owner" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Name</label>
              <input
                type="text"
                name="propertyName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.propertyName}
                onChange={handleChange}
              />
              {errors.propertyName && <p className="text-red-500 text-sm">{errors.propertyName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
              <input
                type="text"
                name="mountlyRent"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.mountlyRent}
                onChange={handleChange}
              />
              {errors.mountlyRent && <p className="text-red-500 text-sm">{errors.mountlyRent}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deposit Amount</label>
              <input
                type="text"
                name="depositAmount"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.depositAmount}
                onChange={handleChange}
              />
              {errors.depositAmount && <p className="text-red-500 text-sm">{errors.depositAmount}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Refund Amount</label>
              <input
                type="text"
                name="refundAmount"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.refundAmount}
                onChange={handleChange}
              />
              {errors.refundAmount && <p className="text-red-500 text-sm">{errors.refundAmount}</p>}

            </div>  
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.city}
                  onChange={handleChange}
                />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                name="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                name="propertyType"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.propertyType}
                onChange={handleChange}
              >
              <option value="">Select property type</option>
              <option value="PG">PG</option>
              <option value="Room">Room</option>
              <option value="Home">Home</option>
              </select>
              {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType}</p>}
            </div>
            {formData.propertyType === "PG" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">PG Type</label>
                  <select
                    name="pgType"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.pgType}
                    onChange={handleChange}
                  >
                  <option value="">Select property type</option>
                  <option value="Leadiespg">leadies PG</option>
                  <option value="Menspg">Mens PG</option>
                  <option value="Colivepg">Co-live PG</option>
                  </select>
                  {errors.pgType && <p className="text-red-500 text-sm">{errors.pgType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Occupancy Type</label>
                  <select
                    name="occupancy"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.occupancy}
                    onChange={handleChange}
                  >
                  <option value="">Select occupancy type</option>
                  <option value="singleshearing">single shearing</option>
                  <option value="twoshearing">two shearing</option>
                  <option value="threeshearing">three shearing</option>
                  <option value="fourshearing">four shearing</option>
                  </select>
                  {errors.occupancy && <p className="text-red-500 text-sm">{errors.occupancy}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Facilities Included In Rent</label>
                    <textarea
                    name="facilitiesIncludedRent"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.facilitiesIncludedRent}
                    onChange={handleChange}
                    />
                  {errors.facilitiesIncludedRent && <p className="text-red-500 text-sm">{errors.facilitiesIncludedRent}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload PG Images</label>
                  <input
                  type="file"
                  name="pgImages"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.pgImages}
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}  
                />
              {errors.pgImages && <p className="text-red-500 text-sm">{errors.pgImages}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">PG Location</label>
                <input
                  type="text"
                  name="pgLocation"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.pgLocation}
                  onChange={handleChange}
                />
                {errors.pgLocation && <p className="text-red-500 text-sm">{errors.pgLocation}</p>}
              </div>

              </>
            )}
            {formData.propertyType === "Room" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Room Size</label>
                  <input
                    type="text"
                    name="roomSize"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.roomSize}
                    onChange={handleChange}
                  />
                  {errors.roomSize && <p className="text-red-500 text-sm">{errors.roomSize}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Facilities Provided</label>
                    <textarea
                    name="facilitiesprovided"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.facilitiesprovided}
                    onChange={handleChange}
                    />
                  {errors.facilitiesprovided && <p className="text-red-500 text-sm">{errors.facilitiesprovided}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700"> Rules and Regulations</label>
                    <textarea
                    name="rulesRegulations"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.rulesRegulations}
                    onChange={handleChange}
                    />
                  {errors.rulesRegulations && <p className="text-red-500 text-sm">{errors.rulesRegulations}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Room Images</label>
                  <input
                  type="file"
                  name="roomImages"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.roomImages}
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}  
                  />
                  {errors.roomImages && <p className="text-red-500 text-sm">{errors.roomImages}</p>}
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Room Location</label>
                <input
                  type="text"
                  name="roomLocation"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.roomLocatiom}
                  onChange={handleChange}
                />
                {errors.roomLocatiom && <p className="text-red-500 text-sm">{errors.roomLocatiom}</p>}
              </div>
              </>
            )}
            {formData.propertyType === "Home" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Home Size</label>
                  <input
                    type="text"
                    name="homeSize"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.HomeSize}
                    onChange={handleChange}
                  />
                  {errors.HomeSize && <p className="text-red-500 text-sm">{errors.HomeSize}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Home configuration</label>
                  <select
                  name="congigration"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.configuration}
                  onChange={handleChange}
                  >
                    <option value="">Select configuration</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                  {errors.configuration && <p className="text-red-500 text-sm">{errors.configuration}</p>}
                </div>

                <div>
              <label className="block text-sm font-medium text-gray-700">Furnishing Status</label>
              <select
                name="firnishingstatus"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.firnishingstatus}
                onChange={handleChange}
              >
              <option value="">Select furnishing</option>
              <option value="fullfurnished">full furnished</option>
              <option value="semifurnished">sime furnished</option>
              <option value="unfurnished">unfurnished</option>
              </select>
              {errors.firnishingstatus && <p className="text-red-500 text-sm">{errors.firnishingstatus}</p>}
            </div>
            <div>
                  <label className="block text-sm font-medium text-gray-700">Other Facilities </label>
                    <textarea
                    name="otherFacilities"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={formData.otherfacilities}
                    onChange={handleChange}
                    />
                  {errors.otherfacilities && <p className="text-red-500 text-sm">{errors.otherfacilities}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Home Images</label>
                  <input
                  type="file"
                  name="homeImages"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.homeImage}
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}  
                />
              {errors.homeImage && <p className="text-red-500 text-sm">{errors.homeImage}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Home Location</label>
                <input
                  type="text"
                  name="homeLocation"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.homeLocation}
                  onChange={handleChange}
                />
                {errors.homeLocation && <p className="text-red-500 text-sm">{errors.homeLocation}</p>}
              </div>
              </>
            )}
          </>
        )}
        
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
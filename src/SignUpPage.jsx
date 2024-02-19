// src/SignUpPage.js
import React, { useState } from "react";

import { supabase } from './supaBaseClient';

import { useNavigate } from 'react-router-dom'


const SignUpPage = () => {


  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    userType: "student", // Default user type
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (window.confirm("are you sure u want to sign up as " + userData.userType)) {


      const { data, error } = await supabase.auth.signUp(userData);

      console.log(data);

      if (error) {

        alert("error " + error.message)
        navigate("/login")

      } else {

        supabase.from(userData.userType).insert({ "email": userData.email, "userType": userData.userType, "id": data.user.id }).then((response) => {

          if (response.error) {
            supabase.auth.admin.deleteUser(data.user.id);
          }
          else {
            alert("please verify  your mail !")

            navigate('/login');
          }



        })

      }
    } 



  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-600">
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              value={userData.userType}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="entreprise">Enterprise</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-800 text-white text-sm py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

import React, { useContext, useState } from "react"
import { supabase } from './supaBaseClient';
import { AuthContext } from "./components/auth/authContext";
import { useNavigate } from "react-router-dom";


const AddNewOpportunity = () => {


  const { user } = useContext(AuthContext);
  // console.log(user);

  const [opportunity, setOpportunity] = useState({
    title: null,
    description: null,
    duration: null,
    level: 'entry',
    format: 'presentiel',
    address: null,
    schedule: 'temps plein',
    startingDate: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here

    const opportunityResponse = await supabase.from("opportunity").insert(opportunity)

    if (opportunityResponse.error) {
      alert("please enter a valid informations")
    }
    else {
      setOpportunity({
        title: null,
        description: null,
        duration: null,
        level: 'entry',
        format: 'presentiel',
        address: null,
        schedule: 'temps plein',
        startingDate: null,
      })
    }

    console.log('Form data submitted:', opportunity);
  };

  return (

    <div className="min-h-screen flex items-center justify-center   overflow-y-auto">
      <div className="bg-white p-8  rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center ">Add New Opportunity</h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={opportunity.title}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={opportunity.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter description"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
              Duration
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={opportunity.duration}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter duration for example 60 day"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startingDate" className="block text-sm font-medium text-gray-600">
              Starting Date
            </label>
            <input
              type="date"
              id="startingDate"
              name="startingDate"
              value={opportunity.startingDate}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="level" className="block text-sm font-medium text-gray-600">
              Level
            </label>
            <select
              id="level"
              name="level"
              value={opportunity.level}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Format</label>
            <div className="flex items-center space-x-4">
              <div className="">
                <input
                  type="radio"
                  id="presentiel"
                  name="format"

                  value="presentiel"
                  onChange={handleChange}

                  className="cursor-pointer"

                />
                <label
                  htmlFor="presentiel"
                  className=" text-sm no-underline"
                >
                  Présentiel
                </label>
              </div>

              <div className="">
                <input
                  type="radio"
                  id="hybride"
                  name="format"
                  value="hybride"
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="hybride"
                  className=" no-underline text-sm"
                >
                  Hybride
                </label>
              </div>

              <div className="">
                <input
                  type="radio"
                  id="distance"
                  name="format"
                  value="distance"
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="distance"
                  className=" no-underline text-sm"
                >
                  À distance
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={opportunity.address}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Schedule</label>
            <div className="flex items-center space-x-4">
              <div className="">
                <input
                  type="radio"
                  id="fullTime"
                  name="schedule"
                  value="fullTime"
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="fullTime"
                  className="no-underline text-sm"
                >
                  Plein temps
                </label>
              </div>

              <div className="">
                <input
                  type="radio"
                  id="partTime"
                  name="schedule"
                  value="partTime"
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="partTime"
                  className="ml-2 text-sm"
                >
                  Temps partiel
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-800 text-white text-sm py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              Add
            </button>

          </div>
        </form>
      </div>
    </div>


  );


}

export default AddNewOpportunity;
import React, { useContext, useState } from "react";
import { supabase } from './supaBaseClient';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./components/auth/authContext";

const AddNewOpportunity = () => {

  
  const { user } = useContext(AuthContext);


  console.log(user);


  const navigate=useNavigate();


  const [opportunity, setOpportunity] = useState
  ({
    companyId:user?.id,
    nom: null,
    description: null,
    duree: null,
    niveau: 'entry',
    preferences_a_distance: 'presentiel',
    lieu: null,
    type_du_travaille: 'temps plein',
    datedebut: null,
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

    if(user.userType!="entreprise"){
      alert("thsi task is only for entreprises")
      navigate("/DisplayStage")
      return ;
    }

    console.log(opportunity);

    const opportunityResponse = await supabase.from("stages").insert(opportunity);

    if (opportunityResponse.error) {
      alert("Please enter valid information or esay later.");
      console.log(opportunityResponse.error);
      window.location.reload();
    } else {
      setOpportunity({
        nom: null,
        description: null,
        duree: null,
        niveau: 'entry',
        preferences_a_distance: 'presentiel',
        lieu: null,
        type_du_travaille: 'temps plein',
        datedebut: null,
      });

      navigate("/DisplayStage")
    }

    console.log('Form data submitted:', opportunity);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-16">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center ">Ajouter une offre de stage</h2>
        <form onSubmit={handleSubmit} name="myForm" method="POST">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Titre
            </label>
            <input
              type="text"
              id="title"
              name="nom"
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
              Durée
            </label>
            <input
              type="number"
              id="duration"
              name="duree"
              value={opportunity.duration}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter duration for example 60 day"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startingDate" className="block text-sm font-medium text-gray-600">
              Début
            </label>
            <input
              type="date"
              id="startingDate"
              name="datedebut"
              value={opportunity.datedebut}
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
              name="niveau"
              value={opportunity.level}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="entry">débutant</option>
              <option value="mid">intermédiaire</option>
              <option value="senior">avancé</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="format" className="block text-sm font-medium text-gray-600">
              Format
            </label>
            <select
              id="format"
              name="preferences_a_distance"
              value={opportunity.preferences_a_distance}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="presentiel">Présentiel</option>
              <option value="hybride">Hybride</option>
              <option value="distance">À distance</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="lieu"
              value={opportunity.lieu}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter address"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="schedule" className="block text-sm font-medium text-gray-600">
              Schedule
            </label>
            <select
              id="schedule"
              name="schedule"
              value={opportunity.type_du_travaille}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="fullTime">Plein temps</option>
              <option value="partTime">Temps partiel</option>
            </select>
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

import React, { useContext, useState } from "react";


import { supabase } from './supaBaseClient';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./components/auth/authContext";



const Opportunity = () => {

  const navigate=useNavigate()
  const { user } = useContext(AuthContext);

  const {stageId}=useParams()

  console.log(user);

  const [candidature, setCandidature] = useState({

    studentId:user?.id,
    opportunityId: stageId,
    nom: '',
    cv: null,
    niveau: 'entry',
    email: '',
  });


  const handleChange = (event) => {
    const { name, value, files } = event.target;

    // If the field is a file input, set cv to the selected file
    const fieldValue = name === 'cv' ? files[0] : value;

    setCandidature((prevCandidature) => ({
      ...prevCandidature,
      [name]: fieldValue,
    }));
  };





  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("*****************"+candidature);

    // Send the data to the database or perform other actions here
    const filePath = candidature.studentId + "/" + candidature.cv.name + Date.now();

    const { data } = await supabase.storage.from("cv").upload(filePath, candidature.cv)

    if (data) {
      candidature.cv = data.path
      const candidatureResponse = await supabase.from("candidature").insert(candidature)
      console.log("from supabase response : ", candidatureResponse);

      if (candidatureResponse.status === 201) {
        // redirect the user to the list of candidature

        navigate("/DisplayStage")

      } else {
        alert("please check your credential")
      }

      // Clear the form fields after submission

      setCandidature({
        nom: '',
        cv: null,
        niveau: 'entry',
        email: '',
      });
    }
    else {
      alert('please uplaod a valid cv')
      candidature.cv = null;
    }




  };




  return (
    <div className="h-screen w-full flex items-center justify-center shadow-xl overflow-y-auto">
      <div className="bg-white p-8 rounded-md shadow-2xl max-w-xl w-full max-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Opportunity Form</h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              nom
            </label>
            <input
              type="text"
              id="name"
              name="nom"
              value={candidature.nom}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-600">
              CV
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="level" className="block text-sm font-medium text-gray-600">
              niveau
            </label>
            <select
              id="level"
              name="niveau"
              value={candidature.niveau}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={candidature.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-800 text-white text-sm py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Opportunity;
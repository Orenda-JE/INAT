import React, { useContext, useState } from "react";


import { supabase } from './supaBaseClient';
import { AuthContext } from "./contexts/authContext";



const Opportunity = ()=>{

    const { user } = useContext(AuthContext);

    console.log(user);

    const [candidature, setCandidature] = useState({

        studentId:1,
        opportunityId:3,
        name: '',
        cv: null,
        level: 'entry',
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
    
        // Send the data to the database or perform other actions here
        const filePath=candidature.studentId+"/"+candidature.cv.name+Date.now();
        console.log("from file path",filePath);

        console.log("*****************************")
        console.log(candidature)

        const {data,error}= await supabase.storage.from("cv").upload(filePath,candidature.cv)
        if(data){
          candidature.cv=data.path        
          const candidatureResponse= await supabase.from("candidature").insert(candidature)
          console.log("from supabase response : ",candidatureResponse);

          if(candidatureResponse.status==201){
            // redirect the user to the list of candidature
          }else{
            alert("please check your credential")
          }

        // Clear the form fields after submission

          setCandidature({
            name: '',
            cv: null,
            level: 'entry',
            email: '',
          });
        }
        else {
          alert('please uplaod a valid cv')
          candidature.cv=null;
        }
        

    
        
      };
    



    return (
<div className="h-screen w-full flex items-center justify-center shadow-xl overflow-y-auto">
  <div className="bg-white p-8 rounded-md shadow-2xl max-w-xl w-full max-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Opportunity Form</h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={candidature.name}
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
              Level
            </label>
            <select
              id="level"
              name="level"
              value={candidature.level}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Opportunity;
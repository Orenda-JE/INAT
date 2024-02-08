import React, { useState } from 'react';
import supabase from '../supabase';
import InputField from './InputField';
import Button from './Button';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { RiLock2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [FormData, setFormData] = useState({ email: '', password: '', userType: '' }); // Add userType to FormData

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: FormData.email,
      password: FormData.password,
    });
    if (error) {
      alert('cant login ' + error.message);
    } else if (data.user) {
      const user = data.user;
      console.log("logged in person", user);
      console.log("id's", user.id);
      console.log("le statuts", FormData.email);

      // Check the userType to determine the table to query(using the select)
      let tableName;
      if (FormData.userType === "admin") {
        tableName = "admin";
      } else if (FormData.userType === "student") {
        tableName = "student";
      } else {
        tableName = "entreprise";
      }

      // Perform a query to check if the user's ID exists in the corresponding table(after making sure it exist in the table users)
      const { data: userData, error: userError } = await supabase
        .from(tableName)
        .select()
        .eq('id', user.id)
        .single();

      if (userError) {
        alert("Error checking user: " + userError.message);
      } else if (userData) {
        // User exists in the table
        console.log("User exists in table: ", tableName);
        // Redirect to the corresponding component based on userType(mta3 select)
        if (FormData.userType === "admin") {
          navigate('/Candidature');
        } else if (FormData.userType === "student") {
          navigate('/DisplayStage');
        } else {
          // Handle redirection for other user types
        }
      } else {
        // User does not exist in the table
        alert("User does not exist in table: " + tableName);
      }
    }
  };

  return (
    <div className="login">
      <div className="titles">
        <h1>INSTITUT NATIONAL AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} method="POST">
        <h1>Connectez vous</h1>
        <p id="pp">Saisissez votre e-mail et mot de passe</p>
        <div className="input-container">
          <FaUser id="user" />
          <InputField
            type="email"
            placeholder="Entrer ton adresse email"
            id="email"
            name="email"
            className="email"
            value={FormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <RiLock2Fill id="lock" />
          <InputField
            type="password"
            placeholder="Mot de passe"
            id="pwd"
            name="password"
            className="pwd"
            value={FormData.password}
            onChange={handleChange}
          />
          <select
            id="userType"
            className="type"
            value={FormData.userType}
            onChange={handleChange}
            name="userType" // Add name attribute for FormData handling
          >
            <option value="">choisir votre status</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
        <Button text="Se connecter" id="butt" />
      </form>
    </div>
  );
};

export default Login;

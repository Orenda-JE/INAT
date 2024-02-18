import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import InputField from './InputField';
import Button from './Button';
import './Inscription.css';
import supabase from '../supabase';

const Inscription = () => {
  
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

    if (window.confirm("Are you sure you want to sign up as " + userData.userType + "?")) {
      const { data, error } = await supabase.auth.signUp(userData);

      console.log(data);

      if (error) {
        alert("Error: " + error.message);
        navigate("/login");
      } else {
        supabase.from(userData.userType).insert({ "email": userData.email, "userType": userData.userType, "id": data.user.id }).then((response) => {
          if (response.error) {
            supabase.auth.admin.deleteUser(data.user.id);
          } else {
            alert("Please verify your email!");
            navigate('/login');
          }
        });
      }
    }
  };

  return (
    <div className='Inscription'>
      <div className='titles'>
        <h1>INSTITUT NATIONAL AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className='form' oonSubmit={handleSubmit} method="POST"> 
        <h1>Inscription</h1>
        <p id='pp'>Ajouter toutes les informations</p>
        {/* Changed type props to name props */}
        <InputField name="Nom" placeholder=" Nom" 
        
        />
        <InputField name="Prenom" placeholder=" Prenom" />
        <InputField  placeholder=" E-mail" 
             type="email"
             id="email"
             name="email"
             value={userData.email}
             onChange={handleChange}/>
        <InputField  placeholder=" Mot de passe" type="password" 
        id="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        />
        <InputField name="conf-email" placeholder=" Confirmer votre mot de passe" type="password" />
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
        <Button type="submit" text="S'inscrire" id="butt"/> 
        
      </form>
    </div>
  );
};

export default Inscription;

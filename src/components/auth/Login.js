import React, { useContext, useEffect, useState } from 'react';
import supabase from '../supabase';
import InputField from './InputField';
import Button from './Button';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { RiLock2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from './authContext';

const Login = () => {
  const { user, setUser, setTTL } = useContext(AuthContext);
  const navigate = useNavigate()

  var error;
  var session

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    userType: "student",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
      if (FormData.userType=="student") {
        navigate("/DisplayStage2")
      }
      else if (FormData.userType=="entreprise") {
        navigate("/DisplayStage")
      }
      else if (FormData.userType=="admin") {
        navigate("/Gestion_compte")
      }
    }
  }, [user])

  const handleSubmit = async (event) => {
    event.preventDefault();


    // Use Supabase auth.signIn to log in the user
    await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,

    }).then(({ data, error }) => {
      if (error) {
        alert('cant login ' + error.message);
      }
      else
        if (data.user) {
          session = data.session;
          supabase.from(loginData.userType).select().eq('id', data.user.id)
            .then((res) => {
              if (res.data.length != 1) {
                alert("please check your role or your credential");
                localStorage.clear()
              } else {
                console.log(user);
                setUser(res.data[0])
                localStorage.setItem("user", JSON.stringify(res.data[0]));
                setTTL(Date.now() + 15 * 60 * 1000);
                localStorage.setItem("TTL", Date.now() + 15 * 60 * 1000);
              }

            })

        }

    });


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
            <option value="admin">Admin</option>
            <option value="student" selected>Student</option>
            <option value="entreprise">Enterprise</option>
          </select>
        </div>
        <Button text="Se connecter" id="butt" />
      </form>
    </div>
  );
};

export default Login;

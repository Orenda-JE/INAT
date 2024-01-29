import logo from './logo.svg';
import './App.css';

import { useHistory } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';

import { supabase } from './supaBaseClient';

import { } from './'
import Opportunity from './opportunity';
import AddNewOpportunity from './AddNewOpportunity';
import SignUpPage from './SignUpPage'
import LoginPage from './Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/authContext';
import { UnactivatedAccountRouter } from './components/UnactivatedUserRouter';
import { UnauthenticatedRouter } from './components/UnauthenticatedUserRouter';

function App() {
  const { user , setUser } = useContext(AuthContext);

  useEffect(()=>{
    let userFromLS= localStorage.getItem("user");
    if(userFromLS) setUser(JSON.parse(userFromLS))
  }, [])

  return (


    <Router>

      <div>
        <Routes>

          <Route path='/login' Component={LoginPage} />

          <Route path='/signUp' Component={SignUpPage} />

          <Route element={<UnauthenticatedRouter/>} >

          
          <Route element={<UnactivatedAccountRouter />} >
          <Route path='/add-opportunity' Component={AddNewOpportunity} />


          </Route>
          </Route>


          <Route path='/' Component={Opportunity} />

          <Route path='/*' Component={LoginPage} />

        </Routes>
      </div>

    </Router>

  );
}

export default App;

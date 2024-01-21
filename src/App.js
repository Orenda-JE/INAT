import logo from './logo.svg';
import './App.css';

import {useHistory} from "react-router-dom"
import { useEffect, useState } from 'react';

import { supabase } from './supaBaseClient';

import {} from './'
import Opportunity from './opportunity';
import AddNewOpportunity from './AddNewOpportunity';
import SignUpPage from './SignUpPage'
import LoginPage from './Login';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {

  

  return (


     <Router>

      <div>
        <Routes>

            <Route path='/login' Component={LoginPage} />
            <Route path='/signUp' Component={SignUpPage}/>
            <Route path='/add-opportunity' Component={AddNewOpportunity} />
            <Route path='/' Component={Opportunity} />

            <Route path='/*' Component={LoginPage} />

        </Routes>
      </div>

     </Router>
   
  );
}

export default App;

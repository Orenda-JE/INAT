import logo from './logo.svg';
import './App.css';

import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";


import { AuthContext } from './components/auth/authContext';
import { UnactivatedAccountRouter } from './components/UnactivatedUserRouter';
import { UnauthenticatedRouter } from './components/UnauthenticatedUserRouter';

import Opportunity from './opportunity';
import AddNewOpportunity from './AddNewOpportunity';

import SignUpPage from './SignUpPage';
import LoginPage from './Login';




//3mor
import Candidature from "./components/candudatures/Candidature";
import DisplayStage from "./components/stage_page/DisplayStage";
import DisplayStage2 from "./components/stage_page_student/DisplayStage2";
import Gestion_compte from "./components/gestion-admin/gestion_compte"
 
//maha
import NavBar from "./components/auth/NavBar";
import NavBar2 from "./components/auth/NavBar2";
import Login from './components/auth/Login';

//hiba
import Inscription from "./components/inscription/Inscription"
import Footer from "./components/inscription/Footer"



//oumaima
import Compte from "./components/compte/Home"
import "../src/components/compte/modife/Home.css";

function App() {
  const { setUser } = useContext(AuthContext);

  /*useEffect(()=>{
    let userFromLS= localStorage.getItem("user");
    if(userFromLS) setUser(JSON.parse(userFromLS))
  }, [])*/

  return (
    <ChakraProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route element={<UnauthenticatedRouter/>}>
              <Route element={<UnactivatedAccountRouter />}>
                <Route path='/add-opportunity' element={ <><NavBar2 /><AddNewOpportunity /></>} />
              </Route>
            </Route>
            <Route path='/Opportunity' element={<><NavBar2 /><Opportunity /></>} />
            <Route path='/DisplayStage' element={<><NavBar2 /><DisplayStage /> <Footer/> </>} />
            <Route path='/NavBar' element={<NavBar />} />
            <Route path='/Candidature' element={<><NavBar2 /> <Candidature /></>} />
            <Route path='/' element={<><NavBar /><div className="App"><Login /></div></>} />
            <Route path='/Inscription' element={ <> <div className="App"><Inscription/> </div> </> } />
            <Route path='/compte' element={ <Compte /> } />
            <Route path='/DisplayStage0' element={<DisplayStage /> } />
            <Route path='/Gestion_compte' element={<><NavBar2 /> <Gestion_compte/> </>} />
            <Route path='/DisplayStage2' element={<><NavBar2 /> <DisplayStage2/> </>} />

      
          </Routes>
          
        </div>
      </Router>    
    </ChakraProvider>
  );
}

export default App;

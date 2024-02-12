import logo from './logo.svg';
import './App.css';

import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

import 'bootstrap/dist/css/bootstrap.min.css';


import { AuthContext } from './components/auth/authContext';


import Opportunity from './opportunity';
import AddNewOpportunity from './AddNewOpportunity';

import SignUpPage from './SignUpPage';
import LoginPage from './Login';




//3mor
import Candidature from "./components/candudatures/Candidature";
import DisplayStage from "./components/stage_page/DisplayStage";
import DisplayStage2 from "./components/stage_page_student/DisplayStage";
import Gestion_compte from "./components/gestion-admin/gestion_compte"

//maha
import NavBar from "./components/auth/NavBar";
import NavBar2 from "./components/auth/NavBar2";
import Login from './components/auth/Login';

//hiba
import Inscription from "./components/inscription/Inscription"
import Footer from "./components/inscription/Footer"



//oumaima

import { UnauthenticatedRouter } from './components/middelwares/UnauthenticatedUserRouter';
import { UnactivatedAccountRouter } from './components/middelwares/UnactivatedUserRouter';
import { OnlyEntrepriseRouter } from './components/middelwares/OnlyEntrepriseRouters';
import Modficompte from './components/compte/Modficompte';
import Home from './components/compte/Home';

function App() {

  const { setUser } = useContext(AuthContext);


  useEffect(() => {
    const timeToLive = localStorage.getItem("TTL");

    if (!timeToLive || timeToLive < Date.now()) {
      localStorage.clear()
      setUser(null);

    } else {

      let userFromLS = localStorage.getItem("user");
      setUser(JSON.parse(userFromLS))
    }


  }, [])

  return (
    <ChakraProvider>
      <Router>
        <div>
          <Routes>
            {/* <Route path='/login' element={<LoginPage />} /> */}


            <Route path='/signUp' element={<SignUpPage />} />


            <Route element={<UnauthenticatedRouter />} >
              <Route element={<UnactivatedAccountRouter />} >

                <Route element={<OnlyEntrepriseRouter />}>

                  <Route path='/add-opportunity' element={<> <NavBar2 /> <AddNewOpportunity /></>} />

                </Route>


              </Route>
            </Route>




            <Route element={<UnauthenticatedRouter />} >
              <Route element={<UnactivatedAccountRouter />} >


                <Route path='/opportunity/:stageId' element={<><NavBar2 /><Opportunity /></>} />



              </Route>
            </Route>



            <Route element={<UnauthenticatedRouter />} >

              <Route path='/compte' element={<Modficompte />} />
              <Route path='/compte2' element={<Home />} />

            </Route>





            <Route path='/DisplayStage' element={<><NavBar2 /><DisplayStage /> <Footer /> </>} />




            <Route path='/NavBar' element={<NavBar />} />



          <Route element={<OnlyEntrepriseRouter/>}>

          <Route path='/Candidature' element={<><NavBar2 /> <Candidature /></>} />

          </Route>
            



            <Route path='/login' element={<><NavBar /><div className="App"><Login /></div></>} />



            <Route path='/Inscription' element={<> <div className="App"><Inscription /> </div> </>} />




            <Route path='/DisplayStage0' element={<DisplayStage />} />




            <Route path='/Gestion_compte' element={<><NavBar2 /> <Gestion_compte /> </>} />




            <Route path='/DisplayStage2' element={<><NavBar2 /> <DisplayStage2 /> </>} />




          </Routes>

        </div>
      </Router>
    </ChakraProvider >
  );
}

export default App;

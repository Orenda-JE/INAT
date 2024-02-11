// App.js
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from './img.png';
import { AuthContext } from "../auth/authContext";
import { supabase } from "../../supaBaseClient";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const { user } = useContext(AuthContext);

  const navigate=useNavigate()


  console.log(user);

  const [student, setStudent] = useState();
  const [editMode, setEditMode] = useState(false);
  const [firstName, setNom] = useState("");
  const [editMDP, setEditMDP] = useState(false);
  const [password, setMDP] = useState("");
  const [editIMG, setEditIMG] = useState(false);
  const [image, setIMG] = useState("");
  const [editPre, setEditPre] = useState(false);
  const [lastName, setPre] = useState("");




  useEffect(() => {
    setStudent(user)
  }, [user]);

  // async function fetchUtilisateur(userId) {
  //   try {
  //     const { data, error } = await supabase
  //       .from("student")
  //       .select("*")
  //       .eq("id", userId);
  //     if (error) throw error;
  //     setStudent(data[0]);

  //   } catch (error) {
  //     console.error("Erreur lors de la récupération de l'utilisateur :", error.message);
  //   }
  // }


  async function handleModifie() {


    // await supabase.auth.update({ password: password });
    // const user = supabase.auth.user();
    try {
      const {status} = await supabase
        .from(student?.userType)
        .update({
          firstName: firstName ? firstName : student.nom,
          lastName: lastName ? lastName : student.lastName,
        })
        .eq("id", student.id);


        if(status!=204){
          alert("can 't update your account try again later !")
          navigate('/');
        }

        alert("your account have been updated succ !")
        navigate('/')


    } catch (error) {
      alert(error.message);
    }
  }


  return (

    <>


      <div className="d-flex align-items-center justify-content-center h-100">
        <Card id="card1" className="w-75"> {/* Adjusted width for responsiveness */}
          <Card.Body>
            <Card.Title id="titre">Mon compte</Card.Title>
            <Card.Text id="text1">Modifier votre profil</Card.Text>
            {student ? (
              <form id="formulaire" key={student?.id}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Nom
                  </Form.Label>
                  <Col sm="6"> {/* Utilizing the remaining width */}
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student?.firstName}
                      disabled={!editMode}
                      onChange={(e) => setNom(e.target.value)}

                    />

                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditMode(true)} >
                      Editer
                    </Button>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Prénom
                  </Form.Label>
                  <Col sm="6"> {/* Utilizing the remaining width */}
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student?.lastName}
                      disabled={!editPre}
                      onChange={(e) => setPre(e.target.value)}

                    />

                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditPre(true)} >
                      Editer
                    </Button>
                  </Col>
                </Form.Group>

                {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Changez votre mot de passe
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="password"
                      placeholder="mot de passe"
                      className="form-control"
                      defaultValue={student?.password}
                      disabled={!editMDP}
                      onChange={(e) => setMDP(e.target.value)}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditMDP(true)}>
                      Editer
                    </Button>
                  </Col>
                </Form.Group> */}

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Image de profil
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="file"
                      className="form-control"
                      defaultValue={student?.image}
                      disabled={!editIMG}
                      onChange={(e) => setIMG(e.target.files)}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditIMG(true)}>
                      Editer
                    </Button>
                  </Col>
                </Form.Group>

                <Button className="d-flex align-items-center justify-content-center" id="btn" onClick={handleModifie}>
                  MODIFIER
                </Button>
              </form>
            ) : (
              <p>Aucun utilisateur trouvé.</p>
            )}

            <div className="container">
              <button className="btn btn-custom" id="btn2">
                <img src={logo} width="30px" height="25px" alt="logo" />
                <span className="highlight">Déconnecter</span>
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>

    </>
  );
};

export default Home;

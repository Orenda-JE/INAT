import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from './img.png';
import { AuthContext } from "../auth/authContext";
import { supabase } from "../../supaBaseClient";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const [student, setStudent] = useState();
  const [editMode, setEditMode] = useState(false);
  const [firstName, setNom] = useState("");
  const [editPre, setEditPre] = useState(false);
  const [lastName, setPre] = useState("");
  const [editIMG, setEditIMG] = useState(false); // Define editIMG state
  const [image, setIMG] = useState(""); // Define image state

  const handleLogout = async () => {
    try {
      // Clear local storage
      await localStorage.clear();
      // Navigate to the login page
      //navigate("/login");
    } catch (error) {
      console.error("Error while clearing local storage:", error);
    }
  };
  

  useEffect(() => {
    setStudent(user);
  }, [user]);

  async function handleModifie() {
    try {
      const { status } = await supabase
        .from(student?.userType)
        .update({
          firstName: firstName ? firstName : student.nom,
          lastName: lastName ? lastName : student.lastName,
        })
        .eq("id", student.id);

      if (status !== 204) {
        alert("Can't update your account. Try again later!");
        navigate('/');
      }

      alert("Your account has been updated successfully!");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" mt={100} mb={2}>

        <Link to="/DisplayStage">
          <Button
            mt="2"
            mr="2"
            mb="2"
            borderRadius="15px"
            backgroundColor="#005D14"
            color="white"
            _hover={{ backgroundColor: '#004A11' }}
          >
            Les Stages
          </Button>
        </Link>
      </Flex>

      <div className="d-flex align-items-center justify-content-center h-100">
        <Card id="card1" className="w-75">
          <Card.Body>
            <Card.Title id="titre">Mon compte</Card.Title>
            <Card.Text id="text1">Modifier votre profil</Card.Text>
            {student ? (
              <form id="formulaire" key={student?.id}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Nom
                  </Form.Label>
                  <Col sm="6">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student?.firstName}
                      disabled={!editMode}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditMode(true)}>
                      Editer
                    </Button>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Prénom
                  </Form.Label>
                  <Col sm="6">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student?.lastName}
                      disabled={!editPre}
                      onChange={(e) => setPre(e.target.value)}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button variant="outline-success" onClick={() => setEditPre(true)}>
                      Editer
                    </Button>
                  </Col>
                </Form.Group>

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
              <button className="btn btn-custom" id="btn2" onClick={handleLogout}>
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

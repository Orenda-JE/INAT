import  { useState, useEffect } from "react";
import Navigation from "../navigation/Nav";
import { ChakraProvider, StackItem } from "@chakra-ui/react";
import Offre from "../offre_componenet/Offre";
import { getData } from "../lesoffres_DB/getdata";
import Sidebar from "../sidebar/Sidebar";
import "./stage.css";
import { Card, CardBody, Heading, Box, Stack, Text, Divider  ,Icon} from '@chakra-ui/react';
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link


function DisplayStage() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((item) =>
    item.nom.toLowerCase().includes(query.toLowerCase())!==-1
  );

  const handleChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  function filteredData(data, selected, query) {
    return data.filter((offer) => {
      // Filtering based on search query
      const matchesSearchQuery = offer.nom.toLowerCase().includes(query.toLowerCase());

      // Filtering based on selected domain
      const matchesSelectedDomain =
        !selected ||
        offer.domain === selected ||
        offer.preferences_a_distance === selected ||
        offer.niveau_education === selected ||
        offer.type === selected ||
        offer.duree === selected ||
        offer.lieu === selected;

      // Include in the result if it matches both conditions
      return matchesSearchQuery && matchesSelectedDomain;
    }).map(({ img, nom, description, poste, duree, type_du_travaille, lieu, domain, preferences_a_distance }) => (
      <Offre
        key={Math.random()}
        img={img}
        nom={nom}
        description={description}
        poste={poste}
        duree={duree}
        type_du_travaille={type_du_travaille}
        lieu={lieu}
        preferences_a_distance={preferences_a_distance}
        domain={domain}
      />
    ));
  }

  const result = filteredData(data, selectedDomain, query);

  return (
    <>
      <ChakraProvider>
      <Navigation result={result} query={query} handleChange={handleChange} handleInputChange={handleInputChange} />

      <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" mt={150}>
      <CardBody>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '15', sm: '20' }} >
          {/* First Card Content */}    
           <div className="box1">
          <Box flex={{ base: '1', sm: '1' }} mb={{ base: '10', sm: '0' }} >
       
            <Heading size="l" textTransform="uppercase">
              filtres
            </Heading>
            <Text pt={{ base: '5', sm: '10' }} fontSize="sm"></Text>
            <div className="filters">
              <Sidebar handleChange={handleChange} result={result} />
            </div>
            
          </Box></div>

          {/* Second Card Content */}
          <Box flex={{ base: '3', sm: '3' }} pb={{ base: '10', sm: '20' }}>
            {result.length >= 0 && (
    <Stack direction={{ base: 'column', sm: 'row' }} display={"flex"} justifyContent={"space-between"}>
    <Text size={{ base: 'xs', sm: 'sm' }} mb={{ base: '5', sm: '10' }}>
      {result.length} offre de stage
    </Text>
    
  </Stack>
  
  
  )}
            <Box
              //overflowY="auto" // Make the box scrollable if content exceeds its height
              //maxH="100vh"  // Set a maximum height for the second Box
            >
              <Divider mb="20px" borderWidth="1px" borderColor={'black'}></Divider>
              {result.map((offer, index) => (
                <Offre key={index} {...offer.props} />
              ))}
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
      </ChakraProvider>
    </>
  );
}

export default DisplayStage;

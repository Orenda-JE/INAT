import { Card, CardBody, Box, Stack, Text, Divider, Button, Flex, Input, Select } from '@chakra-ui/react';
import Gestion_component from './gestion_component';
import { Link } from 'react-router-dom';
import { supabase } from '../../supaBaseClient';
import { useEffect, useState } from 'react';

function GestionCompte() {

  const [selectedStatus, setSelectedStatus] = useState("student"); // State for selected status
  const [users, setUsers] = useState([]); // State for fetched users

  // Function to fetch users based on selected status
  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from(selectedStatus)
        .select('*')
        .eq('status', "false");
      if (error) {
        throw error;
      }
      setUsers(data); // Update users state with fetched data
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts or selected status changes
  }, [selectedStatus]);




  return (
    <Flex direction="column" alignItems="center">
      <Flex flexWrap="wrap" justifyContent="center" mt={100} mb={2}>
        <Link to="/DisplayStage">
          <Button mt="2"
  mr="2"
  mb="2"
  borderRadius="15px"
  backgroundColor="#005D14"
  color="white"
  _hover={{ backgroundColor: '#004A11' }}>Les Stages</Button>
        </Link>
      </Flex>

      <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" mt={4} width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}>
        <CardBody margin={10}>
          <Stack direction="column" spacing={{ base: '10', sm: '15' }}>
            {/* First Card Content */}
            <Flex alignItems="center">
              <Select color="green"
                placeholder='Select option'
                w={"12%"}
                textAlign="left"
                borderRadius={10}
                size="sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}> 
                <option value="student" selected>Etudiant</option>
                <option value="entreprise">Entreprise</option>
              </Select>        
              <Input placeholder="Nom et Prénom" borderRadius={10} size="sm" textAlign="left"  w={"15%"} mr={2} />      

              <Text fontSize="sm" textAlign="right" ml={2}>1 compte</Text>
            </Flex>
            <Divider mb="10px" borderWidth="1px" borderColor="black" />

            <Box>
              <Gestion_component users={users}/>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default GestionCompte;

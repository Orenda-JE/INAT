import { Card, CardBody, Box, Stack, Text, Divider, Button, Flex, Select, Input } from '@chakra-ui/react';
import Condudature_component from './Condidature_component';
import { useContext, useEffect, useState } from 'react';
import { getCandidature } from '../lesoffres_DB/getCandidature';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

function Candidature() {
  const [data, setData] = useState([]);


  const {user}=useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getCandidature(user?.id);
        setData(fetchedData);
        console.log('Fetched Data: ', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex direction="column" alignItems="center">
  <Flex flexWrap="wrap" justifyContent="center" mt={100} mb={2}>
    <Link to="/add-opportunity">
    <Button
  mt="2"
  mr="2"
  mb="2"
  borderRadius="15px"
  backgroundColor="#005D14"
  color="white"
  _hover={{ backgroundColor: '#004A11' }}
>
  Ajouter un stage
</Button>    
</Link>
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



      <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" mt={10} width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}>
        <CardBody margin={10}>
          <Stack direction="column" spacing={{ base: '10', sm: '15' }}>
            {/* First Card Content */}
            <Box textAlign="left" mb={{ base: '5', sm: '0' }} ml={{ base: 4, sm: 0 }} width="100%">
  <Text fontSize={{ base: 'sm', sm: 'md' }}>{data?.length} candidatures</Text>
</Box>

            <Divider mb="10px" borderWidth="1px" borderColor={'black'} />

            {/* Second Card Content */}
            <Box>
              <Condudature_component  />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default Candidature;

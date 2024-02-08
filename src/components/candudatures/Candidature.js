import { Card, CardBody, Box, Stack, Text, Divider, Button, Flex } from '@chakra-ui/react';
import Condudature_component from './Condidature_component';
import { useEffect, useState } from 'react';
import { getCandidature } from '../lesoffres_DB/getCandidature';
import { Link } from 'react-router-dom';

function Candidature() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getCandidature();
        setData(fetchedData);
        console.log('Fetched Data: ', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex direction="column" alignItems="flex-end">
      <Flex>
      <Link to="/add-opportunity">
          <Button mt={20} mr={2} borderRadius={15} colorScheme="teal">ajouter un stage</Button>
        </Link>
        <Link to="/DisplayStage">
          <Button mt={20} mr={10} borderRadius={15} colorScheme="teal">les Stages</Button>
        </Link>
       

      </Flex>

      <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" mt={4}>
        <CardBody margin={10}>
          <Stack direction={{ base: 'column', sm: 'column' }} spacing={{ base: '10', sm: '15' }}>
            {/* First Card Content */}
            <div className="box1">
              <Box flex={{ base: '1', sm: '1' }} mb={{ base: '5', sm: '0' }} >
                <Text pt={{ base: '5', sm: '10' }} fontSize="sm" > {data.length} candidature</Text>
              </Box>
            </div>
            <Divider mb="10px" borderWidth="1px" borderColor={'black'}></Divider>

            {/* Second Card Content */}
            <Box>
              <Condudature_component />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default Candidature;

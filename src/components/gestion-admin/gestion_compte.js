import { Card, CardBody, Box, Stack, Text, Divider, Button, Flex, Input, Select } from '@chakra-ui/react';
import Gestion_component from './gestion_component';
import { Link } from 'react-router-dom';

function GestionCompte() {
  return (
    <Flex direction="column" alignItems="center">
      <Flex flexWrap="wrap" justifyContent="center" mt={100} mb={2}>
        <Link to="/DisplayStage">
          <Button mt={2} borderRadius={15} colorScheme="teal" w="100%">Les Stages</Button>
        </Link>
      </Flex>

      <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" mt={4} width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}>
        <CardBody margin={10}>
          <Stack direction="column" spacing={{ base: '10', sm: '15' }}>
            {/* First Card Content */}
            <Flex alignItems="center">
              <Select color="green" placeholder='Select option' w={"12%"} textAlign="left" borderRadius={10} size="sm"> 
                <option value="Etudiant">Etudiant</option>
                <option value="entreprise">Entreprise</option>
              </Select>        
              <Input placeholder="Nom et Prénom" borderRadius={10} size="sm" textAlign="left"  w={"15%"} mr={2} />      

              <Text fontSize="sm" textAlign="right" ml={2}>1 compte</Text>
            </Flex>
            <Divider mb="10px" borderWidth="1px" borderColor="black" />

            <Box>
              <Gestion_component />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default GestionCompte;

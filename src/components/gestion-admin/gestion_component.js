import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Stack,
    Avatar,
    Wrap,
    WrapItem,
    Text,
    Icon,
  } from '@chakra-ui/react';
  import { FaCheck, FaTimes } from "react-icons/fa";
  import { FaTrashCan } from "react-icons/fa6";
  import { RiEdit2Fill } from "react-icons/ri";


  
  function gestion_component() {
    
  


  
    return (
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th textAlign="center">N°</Th>
              <Th textAlign="center">Nom Prenom</Th>
              <Th textAlign="center">Statut</Th>
              <Th textAlign="center">Date d’inscription</Th>
              <Th textAlign="center">E-mail</Th>
              <Th textAlign="center">validation</Th>
              <Th textAlign="center"></Th>
            </Tr>
          </Thead>
          <Tbody>
            
              <Tr key="">
                <Td textAlign="center">1</Td>
                <Td textAlign="center">
                  <Wrap align="center">
                    <WrapItem>
                      <Avatar name="omar" src="" />
                    </WrapItem>
                    <WrapItem>
                      <Text>omar</Text>
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td textAlign="center" color="green">
                   Etudiant
                </Td>
                <Td textAlign="center">07/03/2024</Td>
                <Td textAlign="center">nomprenom@gmail.com</Td>
                <Td textAlign="center"><Button colorScheme='green'> <FaCheck />  Accepter</Button></Td>
                <Td textAlign="center">
                  <Stack direction='row' spacing={7} justifyContent="center">
                    <Button colorScheme='green' borderRadius={100}>  <RiEdit2Fill /></Button>
                    <Button colorScheme='red'  borderRadius={100}> <FaTrashCan /> </Button>
                  </Stack>
                </Td>
              </Tr>
            
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
  export default gestion_component;
  
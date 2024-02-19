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


  
  function GestionComponent({ users }) {
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
          {users.map((user, index) => (
            <Tr key={index}>
              <Td textAlign="center">{index + 1}</Td>
              <Td textAlign="center">
                <Wrap align="center">
                  <WrapItem>
                    <Avatar name={user.name} src="" />
                  </WrapItem>
                  <WrapItem>
                    <Text>{user.name}</Text>
                  </WrapItem>
                </Wrap>
              </Td>
              <Td textAlign="center" color="green">{user.status}</Td>
              <Td textAlign="center">{user.registration_date}</Td>
              <Td textAlign="center">{user.email}</Td>
              <Td textAlign="center">
                <Button colorScheme='green'> <FaCheck /> Accepter</Button>
              </Td>
              <Td textAlign="center">
                <Stack direction='row' spacing={7} justifyContent="center">
                  <Button colorScheme='green' borderRadius={100}> <RiEdit2Fill /></Button>
                  <Button colorScheme='red' borderRadius={100}> <FaTrashCan /> </Button>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default GestionComponent;
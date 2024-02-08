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
import { IoMdDownload } from "react-icons/io";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getCandidature } from '../lesoffres_DB/getCandidature';
import refuser from './refuser';
import { sendSignupEmail } from '../mail/sendEmail'; 

function Condudature_component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getCandidature();
        setData(fetchedData);
        console.log('Fetched Data: ', fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleRefuse = async (candidatureId) => {
    try {
      await refuser('candidature', candidatureId);
      // After successful refusal, fetch the updated candidature list
      const updatedData = await getCandidature();
      setData(updatedData);
    } catch (error) {
      console.error('Error refusing candidature:', error.message);
    }
  };

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th textAlign="center">N°</Th>
            <Th textAlign="center">Nom Prenom</Th>
            <Th textAlign="center">CV</Th>
            <Th textAlign="center">Stage</Th>
            <Th textAlign="center">Niveau d'etude</Th>
            <Th textAlign="center">E-mail</Th>
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((candidature, index) => (
            <Tr key={index}>
              <Td textAlign="center">{index + 1}</Td>
              <Td textAlign="center">
                <Wrap align="center">
                  <WrapItem>
                    <Avatar name={candidature.nom} src={candidature.avatarUrl} />
                  </WrapItem>
                  <WrapItem>
                    <Text>{candidature.nom}</Text>
                  </WrapItem>
                </Wrap>
              </Td>
              <Td textAlign="center" color="green">
                <Icon as={IoMdDownload} /> Telecharger
              </Td>
              <Td textAlign="center">{candidature.stage}</Td>
              <Td textAlign="center">{candidature.niveau}</Td>
              <Td textAlign="center">{candidature.email}</Td>
              <Td textAlign="center">
                <Stack direction='row' spacing={7} justifyContent="center">
                  <Button colorScheme='green'> <FaCheck />  Accepter</Button>
                  <Button colorScheme='red' onClick={() => handleRefuse(candidature.id)}> <FaTimes /> Refuser</Button>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Condudature_component;

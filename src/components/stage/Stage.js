import Offre from "../offre_componenet/Offre";
import Sidebar from "../sidebar/Sidebar";
import "./stage.css";
import { Card, CardBody, Heading, Box, Stack, Text, Divider } from '@chakra-ui/react';

function Stage({ handleChange, result }) {
  return (
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
              <Text size={{ base: 'xs', sm: 'sm' }} mb={{ base: '5', sm: '10' }}>
                {result.length} internships
              </Text>
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
  );
}

export default Stage;

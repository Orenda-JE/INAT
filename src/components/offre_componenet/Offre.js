import { Card, CardBody, Heading, Stack, Text, CardFooter, Image, Box } from '@chakra-ui/react';

 function Offre({img, nom, description, poste, duree, type_du_travaille}) {
  return (
    <div>
      <div className="container-ofcontainer" >
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                  className="stage-container" bg='#F3F3F3'
                  mb={'20px'}
                >
                  
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={img}
                    alt={nom}
                  />

                  <Stack>
                    <CardBody>

                      <Heading size='md'> {nom}  </Heading>

                      <Text py='2'>
                        {description}
                      </Text>
                      <Text pt='7'>
                        {poste}
                      </Text>
                      <Box
                      display="flex"
                      color="black" 
                      >
                        <Box flex="1" bg="#D9D9D9" p={4}  borderRadius="20px  0 0px 20px">
                             presentiel
                           </Box>
                           <Box flex="1" bg="#E9E9E9" p={4}  borderRadius="0 20px 20px 0">
                           location   
                          </Box>
                          </Box>
                    </CardBody>

                    <CardFooter>
                      
                    <Text py='2' color={'grey'}>
                        date
                      </Text>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
    </div>
  )
}

export default  Offre
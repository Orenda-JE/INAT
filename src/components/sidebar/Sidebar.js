import { Accordion ,AccordionPanel ,AccordionIcon ,Box ,AccordionItem ,AccordionButton, Stack, Divider, Select, Radio, RadioGroup} from "@chakra-ui/react";
import "./Sidebar.css"
import { useState, useEffect } from "react";
import { getdatafiltre } from "../lesoffres_DB/getdatafiltre";
 function Sidebar({handleChange,result, value,domain,type ,duree, preferences_a_distance}) {
    //console.log(handleChange)
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedData = await getdatafiltre();
          setData(fetchedData);
          console.log('Fetched Data: mta3 nav', fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, []);
  return (
      <Accordion allowMultiple >
  <AccordionItem>
    <h2>
      <AccordionButton>
        
        <Box as="span" flex='1' textAlign='left'>
        Domain        </Box>
        <AccordionIcon />
      </AccordionButton>
      <Divider></Divider>

    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup >
    <Stack spacing={5} direction='column'>
    {data.map((offer, index) => {

  if (offer.domain) {
    return (
      <Radio key={index} onChange={handleChange} type="something" value={offer.domain}>
        {offer.domain}
      </Radio>
    );
  }

  return null;
})}
    
  </Stack>
</RadioGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>     Préférences à distance    </Box>
        <AccordionIcon />
      </AccordionButton>
      <Divider></Divider>

    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup >
    <Stack spacing={5} direction='column'>
    {data.map((offer, index) => {

  if (offer.preferences_a_distance) {
    return (
      <Radio key={index} onChange={handleChange} type="something" value={offer.preferences_a_distance}>
        {offer.preferences_a_distance}
      </Radio>
    );
  }

  return null;
})}
</Stack>
</RadioGroup>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>    Niveau d'éducation    </Box>
        <AccordionIcon />
      </AccordionButton>
      <Divider></Divider>

    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={5} direction='column'>
    {data.map((offer, index) => {
/*
  if (offer.preferences_a_distance) {
    return (
      <Radio key={index} onChange={handleChange} type="something" value={offer.preferences_a_distance}>
        {offer.preferences_a_distance}
      </Radio>
    );
  }
*/
  return null;
})}
  <Radio onChange={handleChange} niveau_education="1 an"   value="1 an" > 1 an </Radio>
  <Radio onChange={handleChange} niveau_education="2 ans" value="2 ans" > 2 ans </Radio>
  <Radio onChange={handleChange} niveau_education="licence" value="licence" > licence</Radio>
  <Radio  onChange={handleChange} niveau_education="master" value="master"> master</Radio>
  <Radio  onChange={handleChange} niveau_education="PHD" value="PHD"> PHD</Radio>


</Stack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>     type   </Box>
        <AccordionIcon />
      </AccordionButton>
      <Divider></Divider>

    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={5} direction='column'>
   {/* {result.map((offer, index) => {
  console.log("result chnowa feha ", { ...offer.props });

  if (offer.props.preferences_a_distance) {
    return (
      <Radio key={index} onChange={handleChange} type="something" value={offer.props.preferences_a_distance}>
        {offer.props.preferences_a_distance}
      </Radio>
    );
  }
}
  return null;
})}*/}

</Stack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>     durée   </Box>
        <AccordionIcon />
      </AccordionButton>
      <Divider></Divider>

    </h2>
    <AccordionPanel pb={4} pt={5}>
    <Select placeholder='Select la durée' onChange={handleChange}>
    {data.map((offer, index) => {
          return (
            <option key={index} value={offer.duree}>
              {offer.duree}
            </option>
          );
        })}
</Select>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

  )
}


export default  Sidebar;
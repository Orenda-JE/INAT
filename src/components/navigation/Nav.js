import { Button, Input, Select } from '@chakra-ui/react';
import "./nav.css";
import { useState, useEffect } from "react";
import { getdatafiltre } from '../lesoffres_DB/getdatafiltre';

function Nav({ query, handleChange, handleInputChange }) {
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
    <header id="nav-container">
      <Input
        bg='white'
        color='black'
        placeholder='search'
        size='lg'
        className='search-input'
        htmlSize={70}
        width={{ base: '100%', sm: '70vh' }}
        borderRadius={15}
        onChange={handleInputChange}
        value={query}
      />

      <Select
        placeholder='Select emplacement'
        color='black'
        bg='white'
        mr={50}
        className='select-place'
        width={{ base: '100%', sm: '50vh' }}
        borderRadius={15}
        onChange={handleChange}
      >
        {data ? (
          data.map((offer, index) => (
            <option key={index} value={offer.lieu}>
              {offer.lieu}
            </option>
          ))
        ) : null}
      </Select>

      {/*<Button
        bg='#00330B'
        color='white'
        size='lg'
        className='search-button'
        borderRadius={15}
        //onClick={handleInputChange}
      >
        Search
      </Button>*/}
    </header>
  );
}

export default Nav;

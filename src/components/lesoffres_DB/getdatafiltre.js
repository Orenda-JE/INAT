import supabase from '../supabase';

const getdatafiltre
= async () => {
  

  try {
    const { data: fetchedData, error } = await supabase
      .from('stages')
      .select(' duree, type_du_travaille, lieu, domain, preferences_a_distance', { distinct: true })

    if (error) {
      console.error('Error fetching data:', error.message);
      return [
        {
          
          duree: "",
          type_du_travaille: "",
          lieu: "",
          domain: "",
          preferences_a_distance: ""
        }
      ];
    }

    //console.log("Fetched data from Supabase: mil file getfiltree", fetchedData);

    // Return the fetched data array directly
    return fetchedData || [
      {
        
        duree: "",
        type_du_travaille: "",
        lieu: "",
        domain: "",
        preferences_a_distance: ""
      }
    ];
  } catch (error) {
    console.error('Error:', error.message);
    return [
      {
        
        duree: "",
        type_du_travaille: "",
        lieu: "",
        domain: "",
        preferences_a_distance: ""
      }
    ];
  }

};

export { getdatafiltre };

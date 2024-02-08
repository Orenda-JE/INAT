import supabase from '../supabase';

const getData = async () => {
  
  try {
    const { data: fetchedData, error } = await supabase
      .from('stages')
      .select('img, nom, description, poste, duree, type_du_travaille, lieu, domain, preferences_a_distance');

    if (error) {
      console.error('Error fetching data:', error.message);
      return [
        {
          img: "",
          nom: "",
          description: "",
          poste: "",
          duree: "",
          type_du_travaille: "",
          lieu: "",
          domain: "",
          preferences_a_distance: ""
        }
      ];
    }


    // Return the fetched data array directly
    return fetchedData || [
      {
        img: "",
        nom: "",
        description: "",
        poste: "",
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
        img: "",
        nom: "",
        description: "",
        poste: "",
        duree: "",
        type_du_travaille: "",
        lieu: "",
        domain: "",
        preferences_a_distance: ""
      }
    ];
  }
};

export { getData };

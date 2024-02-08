import supabase from '../supabase';

const getCandidature = async () => {
  
  try {
    const { data: fetchedData, error } = await supabase
      .from('candidature')
      .select('id,email,cv, nom , niveau ');

    if (error) {
      console.error('Error fetching data:', error.message);
      return [
        {
            email: "",
            cv: "",
            nom: "",
            niveau: "",
            id:"",
         
        }
      ];
    }


    // Return the fetched data array directly
    return fetchedData || [
      {
        email: "",
            cv: "",
            nom: "",
            niveau: "",
      }
    ];
  } catch (error) {
    console.error('Error:', error.message);
    return [
      {
        email: "",
            cv: "",
            nom: "",
            niveau: "",
      }
    ];
  }
};

export { getCandidature };

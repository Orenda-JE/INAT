import supabase from '../supabase';

const getCandidature = async (userId) => {



  const { data: opportunitiesData, error: opportunitiesError } = await supabase
    .from('stages')
    .select('id')
    .eq('companyId', userId);


  if (opportunitiesError) {
    console.error('Error fetching opportunities:', opportunitiesError.message);
    return; // Handle the error accordingly
  }

  const opportunityIds = opportunitiesData.map(opportunity => opportunity.id);

  console.log(opportunityIds+
"......................");

  // Step 2: Fetch the candidatures related to the fetched opportunities
  const { data: fetchedData, error } = await supabase
    .from('candidature')
    .select('*').filter("opportunityId","in",`(${opportunityIds})`)
    

  if (error) {
    console.error('Error fetching candidatures:', error.message);
  } else {

    console.log('Fetched candidatures:****************', fetchedData);
    return fetchedData ;
  }



};

export { getCandidature };
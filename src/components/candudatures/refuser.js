import supabase from '../supabase';


async function refuser(tableName, rowId) {
  try {
    // Perform the delete operation
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', rowId);

    if (error) {
      throw error;
    }

    // Check if any rows were deleted
    if (data && data.length > 0) {
      console.log('Row deleted successfully:', data);
      return data;
    } else {
      console.log('No rows deleted.');
      return null;
    }
  } catch (error) {
    console.error('Error deleting row:', error.message);
    throw error;
  }
}

export default refuser;

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

export const fetchNotes = async () => {
    try{
        const { data } = await axios.get(`${API_URL}`)
        return data
    } catch (error){
      console.log(error);
    }

    
    // VITE_API_URL = 'http://127.0.0.1:8000/api/notes/'


}
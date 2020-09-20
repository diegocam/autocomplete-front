import axios from "axios";
import { User } from '../types/User';

const ApiSearch = async (searchTerm: string): Promise<User[] | []> => {
  try {
    const resp = await axios.get(`http://localhost:8080/search/${searchTerm}`);
    return resp.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default ApiSearch;

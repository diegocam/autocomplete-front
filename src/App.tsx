import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import InputField from './InputField';
import ApiSearch from './services/ApiSearch';
import { User } from './types/User';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchUsersByName = async (searchTerm: string) => {
      if (searchTerm !== '') {
        const users = await ApiSearch(searchTerm);
        setUsers(users);
      } else {
        setUsers([]);
      }
    };
    fetchUsersByName(searchTerm);
  }, [searchTerm, setUsers]);

  return (
    <div className="App container">
      <h2>Autocomplete</h2>
      <p>Start typing any first name. It will search a Users database for a list of names.</p>
      <div className="dropdown">
        <InputField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Dropdown users={users} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
}

export default App;

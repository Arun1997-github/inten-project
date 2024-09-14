import './App.css';

import React, { useState, useEffect } from 'react';
import SearchBar from './Component/SearchBar';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the URL
    const fetchCountries = async () => {
      const response = await fetch('https://dpaste.com/79QXDY8TD.txt');
      const data = await response.json();
      console.log("fetched data: ", data)
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar data={countries} />
    </div>
  );
}

export default App;

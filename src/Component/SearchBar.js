import React, { useState } from 'react'
import './SearchBar.css'


const SearchBar = ({data}) =>{
    const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setQuery(userInput);

    console.log("user input:", userInput)

    if(userInput.trim()=== ""){
        setFilteredCountries([]);
        return;
    }

    console.log("country data for filtering:", data)

    // Filter countries by name or capital
    const filtered = data.filter(country =>{
        const countryName = country.name?.toLowerCase() || "";
        const capitalName = country.capital?.toLowerCase() || "";

        console.log(`comparing with: ${countryName} - ${capitalName}`)

        return countryName.includes(userInput) || capitalName.includes(userInput)
    } );
    console.log(filtered)
    
    setFilteredCountries(filtered);
  };

   
    return(
        <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      {filteredCountries.length > 0 && (
        <ul className="suggestions-list">
          {filteredCountries.map((country, index) => (
            <li key={index} className="suggestion-item">
              <strong>{country.country}</strong> - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}


export default SearchBar
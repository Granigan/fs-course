import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Country = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many countries, please refine your search.</div>;
  } else if (countries.length === 0) {
    return <div>No countries match your search.</div>;
  } else if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name}</h1>
        <div>Capital: {countries[0].capital}</div>
        <div>Population: {countries[0].population}</div>
        <h2>Languages</h2>
        <ul>
          {countries[0].languages.map(language => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
        <img src={countries[0].flag} alt="" width="200" />
      </div>
    );
  } else {
    return (
      <div>
        {countries.map(country => (
          <div key={country.numericCode}>{country.name}</div>
        ))}
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [filteredCountries, setNewFilteredCountries] = useState(countries);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
      setNewFilteredCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
    setNewFilteredCountries(
      countries.filter(country =>
        country.name.toUpperCase().includes(event.target.value.toUpperCase())
      )
    );
  };

  return (
    <div>
      Find countries: <input value={newFilter} onChange={handleFilterChange} />
      <Country countries={filteredCountries} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

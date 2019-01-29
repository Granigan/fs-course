import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./component/Display";
import Filter from "./component/Filter";

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
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Display countries={filteredCountries} />
    </div>
  );
};

export default App;

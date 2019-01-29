import React from "react";
import Country from "./Country";
import CountryList from "./CountryList";

const Display = ({ countries, setNewFilter, setNewFilteredCountries }) => {
  const amountOfCountries = countries.length;
  if (amountOfCountries > 10) {
    return <div>Too many countries, please refine your search.</div>;
  } else if (amountOfCountries === 0) {
    return <div>No countries match your search.</div>;
  } else if (amountOfCountries === 1) {
    return <Country country={countries[0]} />;
  } else {
    return <CountryList countries={countries} setNewFilter={setNewFilter} setNewFilteredCountries={setNewFilteredCountries} />;
  }
};

export default Display;

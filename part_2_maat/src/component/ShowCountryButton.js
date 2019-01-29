import React from "react";

const ShowCountryButton = ({ country, setNewFilter, setNewFilteredCountries }) => {
  const showCountry = () => {
    setNewFilter(country.name);
    setNewFilteredCountries([country]);
  };
  return <button onClick={showCountry}>show</button>;
};

export default ShowCountryButton;
import React from "react";
import ShowCountryButton from "./ShowCountryButton";

const CountryList = ({ countries, setNewFilter, setNewFilteredCountries }) => (
  <div>
    {countries.map(country => (
      <div key={country.numericCode}>
        {country.name}
        <ShowCountryButton
          country={country}
          setNewFilter={setNewFilter}
          setNewFilteredCountries={setNewFilteredCountries}
        />
      </div>
    ))}
  </div>
);

export default CountryList;

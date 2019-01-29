import React from "react";
import Country from "./Country";

const Display = ({ countries }) => {
  const amountOfCountries = countries.length;
  if (amountOfCountries > 10) {
    return <div>Too many countries, please refine your search.</div>;
  } else if (amountOfCountries === 0) {
    return <div>No countries match your search.</div>;
  } else if (amountOfCountries === 1) {
    return <Country country={countries[0]} />;
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

export default Display;

import React from "react";

const Details = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Detail key={person.name} name={person.name} number={person.number} />
    ))}
  </div>
);

const Detail = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
);

export default Details;

import React, { useState } from "react";

const Details = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Detail key={person.name} name={person.name} />
    ))}
  </div>
);

const Detail = ({ name }) => <div>{name}</div>;

export default Details;

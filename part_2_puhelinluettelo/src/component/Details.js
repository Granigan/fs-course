import React from "react";
import Detail from "./Detail";

const Details = ({ persons, removePerson }) => (
  <div>
    {persons.map(person => (
      <Detail
        key={person.id}
        id={person.id}
        name={person.name}
        number={person.number}
        removePerson={removePerson}
      />
    ))}
  </div>
);

export default Details;

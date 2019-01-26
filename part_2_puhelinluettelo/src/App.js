import React, { useState } from "react";

const Details = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Detail key={person.name} name={person.name} />
    ))}
  </div>
);

const Detail = ({ name }) => (
  <div>
    {name}
  </div>);

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form>
        <div>
          nimi: <input />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <Details persons={persons} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Details from "./component/Details";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Martti Tienari", number: "040-123456" },
    { name: "Arto Järvinen", number: "040-123456" },
    { name: "Lea Kutvonen", number: "040-123456" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredList, setNewFilteredList] = useState(persons);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
    setNewFilteredList(
      persons.filter(person =>
        person.name.toUpperCase().includes(newFilter.toUpperCase())
      )
    );
  };

  const addPerson = event => {
    event.preventDefault();
    const name = newName;
    const number = newNumber;
    if (persons.map(person => person.name).includes(name)) {
      window.alert(`${name} on jo luettelossa.`);
    } else {
      const personObject = {
        name: name,
        number: number
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <p>
        Hae nimiä: <input value={newFilter} onChange={handleFilterChange} />
      </p>
      <h3>Lisää uusi nimi luetteloon</h3>
      <form onSubmit={addPerson} name={newName}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <Details persons={filteredList} />
    </div>
  );
};

export default App;

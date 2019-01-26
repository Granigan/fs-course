import React, { useState } from "react";
import Details from "./component/Details";
import Title from "./component/Title";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Header from "./component/Header";

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
        person.name.toUpperCase().includes(event.target.value.toUpperCase())
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
      <Title name="Puhelinluettelo" />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Header name="Lisää uusi nimi luetteloon" />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Header name="Numerot" />
      <Details persons={filteredList} />
    </div>
  );
};

export default App;

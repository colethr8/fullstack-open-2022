import { useState } from "react";

import NewForm from "./components/NewForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState("");
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.filter((person) => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const person = {
            name: newName,
            number: newNumber
        };

        setPersons(persons.concat(person));
        setNewName("");
        setNewNumber("");
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handler={handleFilterChange} />
            <NewForm submitHandler={addPerson} nameValue={newName} nameHandler={handleNameChange} numberValue={newNumber} numberHandler={handleNumberChange} />
            <Persons persons={persons} filter={filter} />
        </div>
    );
};

export default App;
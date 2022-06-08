import React from "react";

const Persons = ({ persons, filter }) => {
    return (
        <div>
            <h3>Numbers</h3>
            {persons.filter((person) => person.name.toLowerCase().includes(filter)).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    );
};

export default Persons;
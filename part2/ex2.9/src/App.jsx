import { useState } from 'react'

const Info = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name === newName)
    const foundNumber = persons.find(person => person.number === newNumber)
    if (persons.includes(foundPerson)) {
      alert(`${newName} is already added to the phonebook`)
    } else if (persons.includes(foundNumber)) {
      alert(`${newNumber} is already in the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setFilteredPersons(filteredPersons.concat(personObject))
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const data = persons.filter(person => 
      person.name.toLowerCase()
      .includes((event.target.value).toLowerCase())
    )
    setFilteredPersons(data)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={newFilter} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <Info key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default App
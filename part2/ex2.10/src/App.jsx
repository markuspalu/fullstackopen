import { useState } from 'react'

const Info = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const Search = ( {value, onChange} ) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  )
}

const AddEntry = ( { addName, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addName}> 
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Filtered = ( {filteredPersons} ) => {
  return (
    <div>
      {filteredPersons.map(person => 
        <Info key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

const Title = ( { text } ) => {
  return (
    <h2>{text}</h2>
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
      <Title text="Phonebook" />
      <Search value={newFilter} onChange={handleFilterChange} />
      <Title text="Add a new" />
      <AddEntry addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Title text="Numbers" />
      <Filtered filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
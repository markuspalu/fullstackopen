import { useState } from 'react'

const Info = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '52165132' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    // if (!persons.includes(foundPerson) || !persons.includes(foundNumber)) {
      //   const nameObject = {
    //     name: newName,
    //     number: newNumber,
    //   }
    //   setPersons(persons.concat(nameObject))
    // } else {
      //   alert(`${newName} is already added to the phonebook`)
      // }
      // setNewName("")
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <Info key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default App
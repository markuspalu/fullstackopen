import { useState } from 'react'

const Name = ({ name }) => {
  return (
    <p>{name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name === newName)
    if (!persons.includes(foundPerson)) {
      const nameObject = {
        name: newName,
      }
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
        {/* <div>debug: {newName}</div> */}
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Name key={person.name} name={person.name}/>
      )}
    </div>
  )
}

export default App
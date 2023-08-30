import { useState, useEffect } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Vote = (props) => (
  <p>has {props.voteCount} votes</p>
)

const Title = (props) => (
  <h1>{props.text}</h1>
)

const MostVoted = (props) => (
  <p>{props.text}</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [mVoted, setmVoted] = useState(0)

  const getRandom = () => {
    return Math.floor(Math.random() * anecdotes.length)
  } 

  const changeSelected = () => {
    setSelected(getRandom())
  }

  const voteAnecdote = () => {
    const updatedVotes = [...voted]
    updatedVotes[selected]++
    setVoted(updatedVotes)
    console.log(updatedVotes)
  }

  useEffect(() => {
    mostVoted();
  }, [voted]);

  const mostVoted = () => {
    const updatedVotes = [...voted] // create copy
    const maximum = Math.max(...updatedVotes) // find maximum
    const foundIndex = updatedVotes.findIndex(element => element === maximum) // find index of maximum
    console.log("max index is " + foundIndex)
    setmVoted(foundIndex)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {anecdotes[selected]}
      <Vote voteCount={voted[selected]} /> 
      <Button handleClick={changeSelected} text="next anecdote"/>
      <Button handleClick={voteAnecdote} text="vote" />
      <Title text="Anecdote with the most votes" />
      <MostVoted text={anecdotes[mVoted]} />
      <Vote voteCount={voted[mVoted]} />
    </div>
  )
}
// DEFINITELY PUSH ANECDOTES AND COURSEINFO BUT NEXT TIME PUSH EXERCISE BY EXERCISE SO YOU CAN SEE PROGRESSION AND LEARN FROM THEM
export default App
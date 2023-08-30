import { useState } from "react";

const Title = (props) => (
  <h1>{props.title}</h1>
)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Buttons = (props) => {
  return (
    <div>
      <Button handleClick={props.hcGood} text={props.textGood}/>
      <Button handleClick={props.hcNeu} text={props.textNeu}/>
      <Button handleClick={props.hcBad} text={props.textBad}/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.counterAll !== 0) {
    return (
      <table>
        <tbody>
            <StatisticLine text="good" counter={props.counterGood}/>
            <StatisticLine text="neutral" counter={props.counterNeu}/>
            <StatisticLine text="bad" counter={props.counterBad}/>

            <Display text="all" counter={props.counterAll}/>
            <Display text="average" counter={props.counterAvg}/>
            <Display text="positive" counter={props.counterPos}/>
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const Display = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.counter}</td>
    </tr>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.counter}</td>
    </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const addGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average)
  }

  const addBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <Title title="give feedback" />

      <Buttons
      hcGood={addGood} textGood="good"
      hcNeu={addNeutral} textNeu="neutral"
      hcBad={addBad} textBad="bad"
      />

      <Title title="statistics"/>

      <Statistics 
      textGood="good" counterGood={good} 
      textNeu="neutral" counterNeu={neutral}
      textBad="bad" counterBad={bad}
      textAll="all" counterAll={all}
      textAvg="average" counterAvg={average / all}
      textPos="positive" counterPos={(good / all) * 100 + "%"}
      />
    </div>
  )
}

export default App

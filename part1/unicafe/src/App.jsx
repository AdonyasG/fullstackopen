import { useState } from 'react'


const Statistics = (props) => {
  
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine  text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.all} />
        <StatisticsLine text="average" value={((props.good*1) + (props.neutral*0) + (props.bad*-1))/props.all} />
        <StatisticsLine text="positive" value={(props.good/props.all)*100 + '%'}  />
      </tbody>
    </table>
  )
}


const Header = (props) => <h1>{props.text}</h1>
const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticsLine = (props) => {
  return (
    <tr>
      <td> {props.text}</td>
      <td> {props.value}</td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    const updated = good + 1
    setGood(updated)  
  }

  const handleNeutral = () => {
    setAll(all + 1)
    const updated = neutral + 1
    setNeutral(updated)  
  }

  const handleBad = () => {
    setAll(all + 1)
    const updated = bad + 1
    setBad(updated)  
  }

  


  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Header text="statistics" />
      <Statistics all={all} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
    {text}
    </button>
)


const Feedback = ({name, value}) => (
    <tr>
        <td> {name} </td>
        <td> {value} </td>
    </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return(
      <p>
      No statistics available at the moment.
      </p>
    )
  }

  return(
    <div>
      <h2>
        Statistics 
      </h2>
      <table>
      <tbody>
      <Feedback name={'good'} value={props.good} />
      <Feedback name={'neutral'} value={props.neutral} />
      <Feedback name={'bad'} value={props.bad} />
      <Feedback name={'all'} value={props.all} />
      <Feedback name={'average'} value={props.avg} />
      <Feedback name={'positive'} value={props.pos} />
      </tbody>
      </table>
      </div>
  )
}


const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [score, setScore] = useState(0)
    

    const goodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setScore (score + 1)
    }

    const neutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const badClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setScore (score - 1)
    }

    let avg = score/all
    let pos = (good/all)*100 + "%"

    return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={goodClick} text='good' />
        <Button onClick={neutralClick} text='neutral' />
        <Button onClick={badClick} text='bad' />
      </div>
    <div>
      <Statistics good={good} bad={bad} neutral={neutral} avg={avg} all={all} pos={pos}/>
    </div>
    </div>



    )

}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
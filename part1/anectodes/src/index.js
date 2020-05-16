import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.from(Array(props.anecdotes.length), () => 0))
  const [top, setTop] = useState(0)

  const nextAnectode = () => { 
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const upvote = () => {
      let gianni = [...vote]
      gianni[selected]++
      setVote(gianni)
      setTop(gianni.indexOf(Math.max(...gianni)))
  }


  return (
    <div>
    <h1>Anectode of the day</h1>
    {props.anecdotes[selected]}
    <p>
    <button onClick={nextAnectode}>next anectode</button>
    <button onClick={upvote}>vote</button>
    </p>
    <p>has {vote[selected]} votes </p>
    <h2>most voted</h2>
    {anecdotes[top]}
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
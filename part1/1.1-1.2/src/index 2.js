import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) = {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part1 = (props) = {
  <>
  {props.part1} , {props.exercises1}
  </>
}

const Part2 = (props) = {
  <>
  {props.part2} , {props.exercises2}
  </>
}

const Part3 = (props) = {
  <>
  {props.part3} , {props.exercises3}
  </>
}

const Content = () = {
  return (
    <div>
    <Part1 />
    <Part2 />
    <Part3 />
    </div>
  )
}

const Total = (props) = {
  return (
    <div>
      <p>
      Number of exercises {exercises1 + exercises2 + exercises3
      </p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (

    <div>
      
      <Header course= {course} />
      <Content p1 = {course.parts[0]} p2 = {course.parts[1]} p3 = {course.parts[2]}/>
      <Total p1 = {course.parts[0]} p2 = {course.parts[1]} p3 = {course.parts[2]}/>
    </div>
  )
}

const Header = ( {course} ) => { 
  console.log(" Header method, props:")
  
  console.log(course)
  
  return (
    <div>
      <h1> {course.name}</h1>
    </div>
  )
  }


const Content = ( props ) => {
  return (
  <div>
    <Part p = {props.p1.name} e = {props.p1.exercises}/>
    <Part p = {props.p2.name} e = {props.p2.exercises}/>
    <Part p = {props.p3.name} e = {props.p3.exercises}/>
    </div>
  )
}


const Total = ( props ) => {
 
  return (
    <div>    
      <p>Number of exercises {props.p1.exercises + props.p2.exercises + props.p3.exercises}</p>
    </div>
  )
}

const Part = ( props ) => {
  
  return (
    <div>
       {props.p} {props.e}
    </div>
  )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}


const Part = (props) => {
    return (
        <div>
            <p> {props.name} {props.excersises} </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.name1} excersises={props.exc1} />
            <Part name={props.name2} excersises={props.exc2} />
            <Part name={props.name3} excersises={props.exc3} />
        </div>

    )

}

const Total = (props) => {
    return (
        <div>
            <p>
                {props.sum}
            </p>

        </div>

    )
}



const App = () => {

    const course = 'Half Stack Application Development'

    const part1 = {
        name: 'Fundamentals of React',
        excersises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        excersises: 7
    }

    const part3 = {
        name: 'State of a component',
        excersises: 14
    }



    return (

        <div>

            <Header course={course} />
            <Content name1={part1.name} exc1={part1.excersises} name2={part2.name} exc2={part2.excersises} name3={part3.name} exc3={part3.excersises} />
            <Total sum={part1.excersises + part2.excersises + part3.excersises} />

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))